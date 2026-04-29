<script setup lang="ts">
import type { Letter, ApiResponse, Member } from '~/types'

const config      = useRuntimeConfig()
const auth        = useAuth()
const { request } = useApi()

const searchInput   = ref('')
const letters       = ref<Letter[]>([])
const searched      = ref(false)
const loading       = ref(false)
const errorMsg      = ref<string | null>(null)
const expandedId    = ref<number | null>(null)
const downloadingId = ref<number | null>(null)

// Pastikan profil tersedia (bisa null setelah refresh halaman)
onMounted(async () => {
  if (!auth.member.value) {
    await auth.fetchProfile().catch(() => {})
  }
})

const handleSearch = async () => {
  errorMsg.value = null
  const input  = searchInput.value.trim().toLowerCase()

  if (!input) {
    errorMsg.value = 'Masukkan ID Jemaat atau Nama Jemaat terlebih dahulu.'
    return
  }

  const member = auth.member.value
  if (!member) {
    errorMsg.value = 'Gagal memuat data akun. Coba muat ulang halaman.'
    return
  }

  const cocokId   = member.id_jemaat.toLowerCase() === input
  const cocokNama = member.nama_lengkap.toLowerCase().includes(input)

  if (!cocokId && !cocokNama) {
    errorMsg.value = 'Data tidak ditemukan. Pastikan ID atau nama sesuai akun Anda.'
    letters.value  = []
    searched.value = false
    return
  }

  loading.value = true
  try {
    const res     = await request<ApiResponse<Letter[]>>('/me/letters')
    letters.value = res.data
    searched.value = true
  } catch {
    errorMsg.value = 'Gagal memuat daftar surat.'
  } finally {
    loading.value = false
  }
}

const toggleExpand = (id: number) => {
  expandedId.value = expandedId.value === id ? null : id
}

const formatTanggal = (tgl: string | null | undefined) => {
  if (!tgl) return '-'
  const d     = new Date(tgl)
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}

const detailFields = (letter: Letter): { label: string; value: string }[] => {
  const rows: { label: string; value: string }[] = []
  const t = letter.letter_type

  if (t === 'surat_tugas_pelayanan') {
    rows.push({ label: 'Tujuan Tugas',    value: letter.tujuan_tugas ?? '-' })
    rows.push({ label: 'Tanggal Mulai',   value: formatTanggal(letter.tgl_mulai_tugas) })
    rows.push({ label: 'Tanggal Selesai', value: formatTanggal(letter.tgl_akhir_tugas) })
  } else if (t === 'surat_pengantar') {
    rows.push({ label: 'Keperluan', value: letter.keterangan ?? '-' })
  } else if (t === 'surat_keterangan_jemaat_aktif') {
    rows.push({ label: 'Tahun Bergabung', value: String(letter.tahun_bergabung ?? '-') })
  } else if (t === 'surat_nilai_sekolah') {
    rows.push({ label: 'Asal Sekolah', value: letter.asal_sekolah ?? '-' })
    rows.push({ label: 'Kelas',        value: letter.kelas ?? '-' })
    rows.push({ label: 'Semester',     value: letter.semester ?? '-' })
    rows.push({ label: 'Nilai',        value: String(letter.nilai ?? '-') })
  } else if (t === 'surat_pengajuan_penyerahan_anak') {
    rows.push({ label: 'Nama Anak',         value: letter.nama_anak ?? '-' })
    rows.push({ label: 'Tempat/Tgl Lahir',  value: `${letter.tempat_lahir_anak ?? '-'}, ${formatTanggal(letter.tanggal_lahir_anak)}` })
    rows.push({ label: 'Nama Ayah',         value: letter.nama_ayah ?? '-' })
    rows.push({ label: 'Nama Ibu',          value: letter.nama_ibu ?? '-' })
  } else if (t === 'surat_pengajuan_pernikahan') {
    rows.push({ label: 'Tanggal Pernikahan', value: formatTanggal(letter.tanggal_pernikahan) })
  }

  if (letter.keterangan && t !== 'surat_pengantar') {
    rows.push({ label: 'Keterangan', value: letter.keterangan })
  }

  return rows
}

const downloadPdf = async (letter: Letter) => {
  downloadingId.value = letter.id
  try {
    const token = useCookie<string | null>('api_token')
    const res   = await fetch(`${config.public.apiBase}/me/letters/${letter.id}/download`, {
      headers: { Authorization: `Bearer ${token.value}` },
    })
    if (!res.ok) {
      alert('PDF belum tersedia. Hubungi sekretariat gereja.')
      return
    }
    const blob = await res.blob()
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = `surat-${letter.nomor_surat.replace(/\//g, '-')}.pdf`
    a.click()
    URL.revokeObjectURL(url)
  } catch {
    alert('Gagal mengunduh PDF.')
  } finally {
    downloadingId.value = null
  }
}
</script>

<template>
  <section class="w-full py-10 px-4 bg-white font-sans min-h-screen">
    <div class="max-w-3xl mx-auto">

      <!-- Header -->
      <div class="mb-8 text-center">
        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-800">Cari Surat</h2>
        <p class="text-sm text-gray-500 mt-1">
          Masukkan ID Jemaat atau Nama Jemaat untuk menampilkan surat Anda
        </p>
      </div>

      <!-- Form Pencarian -->
      <div class="bg-gray-50 border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">
        <label class="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">
          ID Jemaat atau Nama Jemaat
        </label>
        <div class="flex gap-3">
          <input
            v-model="searchInput"
            type="text"
            placeholder="Contoh: 15051980 atau Budi Santoso"
            class="flex-1 px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-[#00334e] focus:outline-none transition"
            @keyup.enter="handleSearch"
          />
          <button
            @click="handleSearch"
            :disabled="loading"
            class="px-6 py-3 bg-[#00334e] text-white text-sm font-bold rounded-xl hover:bg-neutral-800 transition active:scale-95 disabled:opacity-50 shrink-0"
          >
            {{ loading ? 'Mencari...' : 'Cari' }}
          </button>
        </div>
        <p v-if="errorMsg" class="mt-3 text-sm text-red-500 font-medium">{{ errorMsg }}</p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="flex justify-center py-16">
        <div class="w-8 h-8 border-4 border-[#00334e] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Setelah search berhasil -->
      <template v-else-if="searched">

        <!-- Tidak ada surat -->
        <div v-if="letters.length === 0" class="text-center py-16 text-gray-400">
          <svg class="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <p class="text-sm font-medium">Belum ada surat yang diterbitkan.</p>
          <p class="text-xs mt-1">Hubungi sekretariat untuk pengajuan surat.</p>
        </div>

        <!-- Daftar Surat -->
        <div v-else class="space-y-4">
          <p class="text-xs text-gray-400 mb-2">{{ letters.length }} surat ditemukan</p>

          <div
            v-for="letter in letters"
            :key="letter.id"
            class="bg-gray-50 border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
          >
            <!-- Header kartu — klik untuk expand -->
            <button
              class="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-gray-100 transition"
              @click="toggleExpand(letter.id)"
            >
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-gray-800">{{ letter.tipe_surat }}</p>
                <p class="text-xs font-mono text-gray-500 mt-0.5">{{ letter.nomor_surat }}</p>
                <p class="text-xs text-gray-400 mt-0.5">{{ formatTanggal(letter.tanggal_surat) }}</p>
              </div>
              <div class="flex items-center gap-2 shrink-0 mt-0.5">
                <span
                  v-if="letter.has_pdf"
                  class="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full"
                >
                  PDF Tersedia
                </span>
                <svg
                  class="w-4 h-4 text-gray-400 transition-transform duration-200"
                  :class="{ 'rotate-180': expandedId === letter.id }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </button>

            <!-- Detail surat yang dapat diperluas -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="expandedId === letter.id" class="px-5 pb-5 border-t border-gray-100">

                <!-- Field detail per tipe -->
                <dl v-if="detailFields(letter).length > 0" class="mt-4 space-y-2">
                  <div
                    v-for="field in detailFields(letter)"
                    :key="field.label"
                    class="flex gap-3"
                  >
                    <dt class="w-40 text-gray-400 text-xs shrink-0 pt-0.5">{{ field.label }}</dt>
                    <dd class="text-gray-700 text-xs">{{ field.value }}</dd>
                  </div>
                </dl>

                <!-- Tombol unduh -->
                <div class="mt-5">
                  <button
                    v-if="letter.has_pdf"
                    @click="downloadPdf(letter)"
                    :disabled="downloadingId === letter.id"
                    class="flex items-center gap-2 px-5 py-2.5 bg-[#00334e] text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition active:scale-95 disabled:opacity-50"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    {{ downloadingId === letter.id ? 'Mengunduh...' : 'Unduh PDF' }}
                  </button>
                  <p v-else class="text-xs text-gray-400 italic">
                    PDF belum tersedia — hubungi sekretariat gereja.
                  </p>
                </div>

              </div>
            </Transition>
          </div>
        </div>

      </template>

    </div>
  </section>
</template>

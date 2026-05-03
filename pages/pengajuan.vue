<script setup lang="ts">
import type { ApiResponse, PengajuanSurat } from '~/types'

definePageMeta({ middleware: 'auth' })

const { request } = useApi()

// --- Letter types ---
const letterTypes = [
  { value: 'surat_tugas_pelayanan',           label: 'Surat Tugas Pelayanan' },
  { value: 'surat_pengantar',                 label: 'Surat Pengantar' },
  { value: 'surat_keterangan_jemaat_aktif',   label: 'Surat Keterangan Jemaat Aktif' },
  { value: 'surat_nilai_sekolah',             label: 'Surat Nilai Sekolah' },
  { value: 'surat_pengajuan_baptisan',        label: 'Surat Pengajuan Baptisan' },
  { value: 'surat_pengajuan_penyerahan_anak', label: 'Surat Pengajuan Penyerahan Anak' },
  { value: 'surat_pengajuan_pernikahan',      label: 'Surat Pengajuan Pernikahan' },
]

// --- Form state ---
const selectedType = ref('')
const submitting   = ref(false)
const submitted    = ref(false)
const formError    = ref<string | null>(null)
const fieldErrors  = ref<Record<string, string[]>>({})

const form = reactive({
  keterangan:          '',
  tgl_mulai_tugas:     '',
  tgl_akhir_tugas:     '',
  tujuan_tugas:        '',
  tahun_bergabung:     '',
  asal_sekolah:        '',
  kelas:               '',
  semester:            '',
  nilai:               '',
  nama_ayah:           '',
  nama_ibu:            '',
  nama_anak:           '',
  tempat_lahir_anak:   '',
  tanggal_lahir_anak:  '',
  id_jemaat_pria:      '',
  id_jemaat_wanita:    '',
  tanggal_pernikahan:  '',
})

function resetForm() {
  selectedType.value = ''
  formError.value    = null
  fieldErrors.value  = {}
  Object.keys(form).forEach(k => { (form as Record<string, string>)[k] = '' })
}

function fieldError(key: string): string | null {
  return fieldErrors.value[key]?.[0] ?? null
}

async function submit() {
  formError.value   = null
  fieldErrors.value = {}
  submitting.value  = true

  const payload: Record<string, string | number> = { letter_type: selectedType.value }

  if (selectedType.value === 'surat_tugas_pelayanan') {
    payload.tgl_mulai_tugas = form.tgl_mulai_tugas
    payload.tgl_akhir_tugas = form.tgl_akhir_tugas
    payload.tujuan_tugas    = form.tujuan_tugas
  } else if (selectedType.value === 'surat_pengantar') {
    payload.keterangan = form.keterangan
  } else if (selectedType.value === 'surat_keterangan_jemaat_aktif') {
    payload.tahun_bergabung = Number(form.tahun_bergabung)
  } else if (selectedType.value === 'surat_nilai_sekolah') {
    payload.asal_sekolah = form.asal_sekolah
    payload.kelas        = form.kelas
    payload.semester     = form.semester
  } else if (selectedType.value === 'surat_pengajuan_penyerahan_anak') {
    payload.nama_ayah          = form.nama_ayah
    payload.nama_ibu           = form.nama_ibu
    payload.nama_anak          = form.nama_anak
    payload.tempat_lahir_anak  = form.tempat_lahir_anak
    payload.tanggal_lahir_anak = form.tanggal_lahir_anak
  } else if (selectedType.value === 'surat_pengajuan_pernikahan') {
    payload.id_jemaat_pria    = form.id_jemaat_pria
    payload.id_jemaat_wanita  = form.id_jemaat_wanita
    payload.tanggal_pernikahan = form.tanggal_pernikahan
  }

  try {
    await request('/me/pengajuan', { method: 'POST', body: payload })
    submitted.value = true
    resetForm()
    await refreshHistory()
  } catch (err: unknown) {
    const e = err as { status?: number; data?: { errors?: Record<string, string[]>; message?: string } }
    if (e?.status === 422 && e.data?.errors) {
      fieldErrors.value = e.data.errors
    } else {
      formError.value = e?.data?.message ?? 'Terjadi kesalahan. Coba lagi.'
    }
  } finally {
    submitting.value = false
  }
}

// --- History ---
const { data: historyData, refresh: refreshHistory } = await useAsyncData(
  'pengajuan-history',
  () => request<ApiResponse<PengajuanSurat[]>>('/me/pengajuan').catch(() => null)
)

const history = computed(() => historyData.value?.data ?? [])

function statusClass(status: string) {
  if (status === 'Disetujui') return 'bg-green-100 text-green-700'
  if (status === 'Ditolak')   return 'bg-red-100 text-red-700'
  return 'bg-yellow-100 text-yellow-700'
}

const today = new Date().toISOString().split('T')[0]
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">
    <NavbarApp />

    <main class="flex-1 max-w-3xl mx-auto w-full px-4 py-10">

      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Pengajuan Surat</h1>
        <p class="text-sm text-gray-500 mt-1">Ajukan surat gereja yang Anda butuhkan. Sekretariat akan memproses dalam waktu dekat.</p>
      </div>

      <!-- Success banner -->
      <Transition name="fade">
        <div v-if="submitted" class="mb-6 flex items-start gap-3 bg-green-50 border border-green-300 text-green-800 rounded-xl p-4">
          <svg class="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <p class="text-sm font-semibold">Pengajuan berhasil dikirim!</p>
            <p class="text-sm mt-0.5">Pengajuan Anda sedang diproses oleh sekretariat.</p>
          </div>
          <button @click="submitted = false" class="ml-auto text-green-600 hover:text-green-800">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </Transition>

      <!-- Form -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 class="font-semibold text-gray-700 mb-5">Form Pengajuan Baru</h2>

        <div v-if="formError" class="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {{ formError }}
        </div>

        <form @submit.prevent="submit" class="space-y-5">

          <!-- Pilih tipe surat -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Jenis Surat <span class="text-red-500">*</span></label>
            <select
              v-model="selectedType"
              required
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white appearance-none"
            >
              <option value="" disabled>— Pilih jenis surat —</option>
              <option v-for="t in letterTypes" :key="t.value" :value="t.value">{{ t.label }}</option>
            </select>
          </div>

          <!-- === surat_tugas_pelayanan === -->
          <template v-if="selectedType === 'surat_tugas_pelayanan'">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Tanggal Mulai Tugas <span class="text-red-500">*</span></label>
                <input type="date" v-model="form.tgl_mulai_tugas" required
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('tgl_mulai_tugas') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('tgl_mulai_tugas')" class="text-xs text-red-500 mt-1">{{ fieldError('tgl_mulai_tugas') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Tanggal Akhir Tugas <span class="text-red-500">*</span></label>
                <input type="date" v-model="form.tgl_akhir_tugas" required
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('tgl_akhir_tugas') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('tgl_akhir_tugas')" class="text-xs text-red-500 mt-1">{{ fieldError('tgl_akhir_tugas') }}</p>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Tujuan Tugas <span class="text-red-500">*</span></label>
              <textarea v-model="form.tujuan_tugas" rows="3" required placeholder="Jelaskan tujuan dan lokasi tugas pelayanan..."
                        class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        :class="fieldError('tujuan_tugas') ? 'border-red-400' : 'border-gray-200'"></textarea>
              <p v-if="fieldError('tujuan_tugas')" class="text-xs text-red-500 mt-1">{{ fieldError('tujuan_tugas') }}</p>
            </div>
          </template>

          <!-- === surat_pengantar === -->
          <template v-else-if="selectedType === 'surat_pengantar'">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Keperluan / Keterangan <span class="text-red-500">*</span></label>
              <textarea v-model="form.keterangan" rows="3" required placeholder="Tuliskan keperluan surat pengantar ini..."
                        class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        :class="fieldError('keterangan') ? 'border-red-400' : 'border-gray-200'"></textarea>
              <p v-if="fieldError('keterangan')" class="text-xs text-red-500 mt-1">{{ fieldError('keterangan') }}</p>
            </div>
          </template>

          <!-- === surat_keterangan_jemaat_aktif === -->
          <template v-else-if="selectedType === 'surat_keterangan_jemaat_aktif'">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Tahun Bergabung Jemaat <span class="text-red-500">*</span></label>
              <input type="number" v-model="form.tahun_bergabung" required min="1900" :max="new Date().getFullYear()"
                     placeholder="Contoh: 2010"
                     class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     :class="fieldError('tahun_bergabung') ? 'border-red-400' : 'border-gray-200'" />
              <p v-if="fieldError('tahun_bergabung')" class="text-xs text-red-500 mt-1">{{ fieldError('tahun_bergabung') }}</p>
            </div>
          </template>

          <!-- === surat_nilai_sekolah === -->
          <template v-else-if="selectedType === 'surat_nilai_sekolah'">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Asal Sekolah <span class="text-red-500">*</span></label>
              <input type="text" v-model="form.asal_sekolah" required placeholder="Nama sekolah"
                     class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     :class="fieldError('asal_sekolah') ? 'border-red-400' : 'border-gray-200'" />
              <p v-if="fieldError('asal_sekolah')" class="text-xs text-red-500 mt-1">{{ fieldError('asal_sekolah') }}</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Kelas <span class="text-red-500">*</span></label>
                <input type="text" v-model="form.kelas" required placeholder="X / XI / XII"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('kelas') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('kelas')" class="text-xs text-red-500 mt-1">{{ fieldError('kelas') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Semester <span class="text-red-500">*</span></label>
                <input type="text" v-model="form.semester" required placeholder="1 / 2"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('semester') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('semester')" class="text-xs text-red-500 mt-1">{{ fieldError('semester') }}</p>
              </div>
            </div>
          </template>

          <!-- === surat_pengajuan_baptisan === -->
          <template v-else-if="selectedType === 'surat_pengajuan_baptisan'">
            <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
              <p class="font-semibold mb-1">Tidak ada data tambahan yang diperlukan.</p>
              <p>Pengajuan baptisan akan diproses berdasarkan data profil Anda yang terdaftar.</p>
            </div>
          </template>

          <!-- === surat_pengajuan_penyerahan_anak === -->
          <template v-else-if="selectedType === 'surat_pengajuan_penyerahan_anak'">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Nama Ayah <span class="text-red-500">*</span></label>
                <input type="text" v-model="form.nama_ayah" required placeholder="Nama lengkap ayah"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('nama_ayah') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('nama_ayah')" class="text-xs text-red-500 mt-1">{{ fieldError('nama_ayah') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Nama Ibu <span class="text-red-500">*</span></label>
                <input type="text" v-model="form.nama_ibu" required placeholder="Nama lengkap ibu"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('nama_ibu') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('nama_ibu')" class="text-xs text-red-500 mt-1">{{ fieldError('nama_ibu') }}</p>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Nama Anak <span class="text-red-500">*</span></label>
              <input type="text" v-model="form.nama_anak" required placeholder="Nama lengkap anak"
                     class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     :class="fieldError('nama_anak') ? 'border-red-400' : 'border-gray-200'" />
              <p v-if="fieldError('nama_anak')" class="text-xs text-red-500 mt-1">{{ fieldError('nama_anak') }}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Tempat Lahir Anak <span class="text-red-500">*</span></label>
                <input type="text" v-model="form.tempat_lahir_anak" required placeholder="Kota kelahiran"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('tempat_lahir_anak') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('tempat_lahir_anak')" class="text-xs text-red-500 mt-1">{{ fieldError('tempat_lahir_anak') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Tanggal Lahir Anak <span class="text-red-500">*</span></label>
                <input type="date" v-model="form.tanggal_lahir_anak" required :max="today"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('tanggal_lahir_anak') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('tanggal_lahir_anak')" class="text-xs text-red-500 mt-1">{{ fieldError('tanggal_lahir_anak') }}</p>
              </div>
            </div>
          </template>

          <!-- === surat_pengajuan_pernikahan === -->
          <template v-else-if="selectedType === 'surat_pengajuan_pernikahan'">
            <div class="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-700">
              Masukkan No. ID Jemaat (format DDMMYYYY) dari mempelai pria dan wanita.
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">No. ID Mempelai Pria <span class="text-red-500">*</span></label>
                <input type="number" v-model="form.id_jemaat_pria" required placeholder="Contoh: 01011990"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm font-mono outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('id_jemaat_pria') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('id_jemaat_pria')" class="text-xs text-red-500 mt-1">{{ fieldError('id_jemaat_pria') }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">No. ID Mempelai Wanita <span class="text-red-500">*</span></label>
                <input type="number" v-model="form.id_jemaat_wanita" required placeholder="Contoh: 15051992"
                       class="w-full border rounded-xl px-4 py-2.5 text-sm font-mono outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       :class="fieldError('id_jemaat_wanita') ? 'border-red-400' : 'border-gray-200'" />
                <p v-if="fieldError('id_jemaat_wanita')" class="text-xs text-red-500 mt-1">{{ fieldError('id_jemaat_wanita') }}</p>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Rencana Tanggal Pernikahan <span class="text-red-500">*</span></label>
              <input type="date" v-model="form.tanggal_pernikahan" required :min="today"
                     class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     :class="fieldError('tanggal_pernikahan') ? 'border-red-400' : 'border-gray-200'" />
              <p v-if="fieldError('tanggal_pernikahan')" class="text-xs text-red-500 mt-1">{{ fieldError('tanggal_pernikahan') }}</p>
            </div>
          </template>

          <!-- Submit -->
          <div v-if="selectedType" class="pt-2">
            <button
              type="submit"
              :disabled="submitting"
              class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <span v-if="submitting">Mengirim pengajuan...</span>
              <span v-else>Kirim Pengajuan</span>
            </button>
          </div>

        </form>
      </div>

      <!-- History -->
      <div>
        <h2 class="font-semibold text-gray-700 mb-4">Riwayat Pengajuan Saya</h2>

        <div v-if="history.length === 0" class="bg-white rounded-2xl border border-gray-100 py-12 text-center text-gray-400">
          <svg class="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <p class="text-sm">Belum ada pengajuan surat.</p>
        </div>

        <div v-else class="space-y-3">
          <div
            v-for="item in history"
            :key="item.id"
            class="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between gap-4"
          >
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">{{ item.tipe_surat }}</p>
              <p class="text-xs text-gray-400 mt-0.5">
                Diajukan {{ new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}
              </p>
              <p v-if="item.catatan" class="text-xs text-red-600 mt-1 truncate">
                Catatan: {{ item.catatan }}
              </p>
            </div>
            <div class="flex items-center gap-3 shrink-0">
              <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold" :class="statusClass(item.status)">
                {{ item.status }}
              </span>
              <NuxtLink
                v-if="item.letter_id"
                :to="`/surat`"
                class="text-xs text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
              >
                Lihat Surat →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </main>

    <FooterLogin />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

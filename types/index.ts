export interface Member {
  id: number
  id_jemaat: string
  nama_lengkap: string
  jenis_kelamin: 'Laki-laki' | 'Perempuan'
  tanggal_lahir: string
  tempat_lahir: string
  alamat: string
  no_telepon: string
  status_aktif: 'Aktif' | 'Tidak Aktif' | 'Dipindahkan'
  role: 'admin' | 'member'
}

export interface Letter {
  id: number
  tipe_surat: string
  letter_type: string
  nomor_surat: string
  tanggal_surat: string
  keterangan: string | null
  has_pdf: boolean
  tgl_mulai_tugas?: string | null
  tgl_akhir_tugas?: string | null
  tujuan_tugas?: string | null
  tahun_bergabung?: number | null
  asal_sekolah?: string | null
  kelas?: string | null
  semester?: string | null
  nilai?: number | null
  nama_ayah?: string | null
  nama_ibu?: string | null
  nama_anak?: string | null
  tempat_lahir_anak?: string | null
  tanggal_lahir_anak?: string | null
  tanggal_pernikahan?: string | null
  created_at: string
}

export interface ApiResponse<T> {
  status: 'success' | 'error'
  message: string
  data: T
}

export interface JadwalPelayanan {
  id: number
  nama_kegiatan: string
  kategori: string
  deskripsi: string | null
  hari: string
  waktu: string
  urutan: number
  aktif: boolean
  created_at: string
}

export interface GaleriFoto {
  id: number
  judul: string
  deskripsi: string | null
  foto: string
  foto_url: string
  urutan: number
  created_at: string
}

export interface Pengumuman {
  id: number
  judul: string
  isi: string
  tanggal_mulai: string
  tanggal_akhir: string | null
  aktif: boolean
  created_at: string
}

export interface PengajuanSurat {
  id: number
  letter_type: string
  tipe_surat: string
  status: 'Dalam Proses' | 'Disetujui' | 'Ditolak'
  letter_id: number | null
  catatan: string | null
  created_at: string
  keterangan?: string | null
  tgl_mulai_tugas?: string | null
  tgl_akhir_tugas?: string | null
  tujuan_tugas?: string | null
  tahun_bergabung?: number | null
  asal_sekolah?: string | null
  kelas?: string | null
  semester?: string | null
  nilai?: number | null
  nama_ayah?: string | null
  nama_ibu?: string | null
  nama_anak?: string | null
  tempat_lahir_anak?: string | null
  tanggal_lahir_anak?: string | null
  tanggal_pernikahan?: string | null
}

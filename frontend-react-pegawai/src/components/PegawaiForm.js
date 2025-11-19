// src/components/PegawaiForm.js
import React, { useState, useEffect } from 'react';

const PegawaiForm = ({ pegawaiToEdit, onSave }) => {
  const [pegawai, setPegawai] = useState({
    nama: '',
    jabatan: '',
    gaji: '',
  });

  // useEffect untuk mengisi form jika ada data pegawai yang akan diedit
  useEffect(() => {
    if (pegawaiToEdit) {
      setPegawai(pegawaiToEdit);
    } else {
      // Reset form jika tidak ada yang diedit
      setPegawai({ nama: '', jabatan: '', gaji: '' });
    }
  }, [pegawaiToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPegawai({ ...pegawai, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pegawai.nama || !pegawai.jabatan || !pegawai.gaji) {
      alert('Semua field harus diisi!');
      return;
    }
    onSave(pegawai);
  };

  return (
    <form onSubmit={handleSubmit} className="pegawai-form">
      <h2>{pegawaiToEdit ? 'Edit Pegawai' : 'Tambah Pegawai Baru'}</h2>
      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={pegawai.nama}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jabatan"
        placeholder="Jabatan"
        value={pegawai.jabatan}
        onChange={handleChange}
      />
      <input
        type="number"
        name="gaji"
        placeholder="Gaji"
        value={pegawai.gaji}
        onChange={handleChange}
      />
      <button type="submit">
        {pegawaiToEdit ? 'Update' : 'Simpan'}
      </button>
    </form>
  );
};

export default PegawaiForm;
import React, { useState, useEffect } from 'react';
import PegawaiForm from './components/PegawaiForm';
import PegawaiList from './components/PegawaiList';
import { getPegawai, createPegawai, updatePegawai, deletePegawai } from './api/pegawaiApi';
import './App.css';

function App() {
  const [pegawaiList, setPegawaiList] = useState([]);
  const [editingPegawai, setEditingPegawai] = useState(null);

  useEffect(() => {
    fetchPegawai();
  }, []);

  const fetchPegawai = async () => {
    try {
      const response = await getPegawai();
      setPegawaiList(response.data);
    } catch (error) {
      console.error("Gagal mengambil data pegawai:", error);
    }
  };

  const handleSave = async (pegawaiData) => {
    try {
      if (editingPegawai) {
        // Mode edit
        await updatePegawai(editingPegawai.id, pegawaiData);
        alert('Data pegawai berhasil diperbarui!');
      } else {
        // Mode tambah
        await createPegawai(pegawaiData);
        alert('Data pegawai berhasil ditambahkan!');
      }
      setEditingPegawai(null); // Reset form
      fetchPegawai(); // Ambil ulang data
    } catch (error) {
      console.error("Gagal menyimpan data pegawai:", error);
      alert('Terjadi kesalahan saat menyimpan data.');
    }
  };

  const handleEdit = (pegawai) => {
    setEditingPegawai(pegawai);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      try {
        await deletePegawai(id);
        alert('Data pegawai berhasil dihapus.');
        fetchPegawai(); // Ambil ulang data
      } catch (error) {
        console.error("Gagal menghapus data pegawai:", error);
        alert('Terjadi kesalahan saat menghapus data.');
      }
    }
  };

  return (
    <div className="App">
      <h1>Aplikasi Manajemen Pegawai</h1>
      <PegawaiForm
        pegawaiToEdit={editingPegawai}
        onSave={handleSave}
      />
      <PegawaiList
        pegawaiList={pegawaiList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
// src/components/PegawaiList.js
import React from 'react';

const PegawaiList = ({ pegawaiList, onEdit, onDelete }) => {
  return (
    <div className="pegawai-list">
      <h2>Daftar Pegawai</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Gaji</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pegawaiList.length > 0 ? (
            pegawaiList.map((pegawai, index) => (
              <tr key={pegawai.id}>
                <td>{index + 1}</td>
                <td>{pegawai.nama}</td>
                <td>{pegawai.jabatan}</td>
                <td>Rp {pegawai.gaji.toLocaleString('id-ID')}</td>
                <td>
                  <button onClick={() => onEdit(pegawai)} className="btn-edit">Edit</button>
                  <button onClick={() => onDelete(pegawai.id)} className="btn-delete">Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Tidak ada data pegawai.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PegawaiList;
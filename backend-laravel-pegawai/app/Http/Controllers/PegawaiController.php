<?php

namespace App\Http\Controllers;

use App\Models\pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    public function index()
    {
        return pegawai::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'jabatan' => 'required|string|max:255',
            'gaji' => 'required|integer',
        ]);
        $pegawai = pegawai::create($validated);

        return response()->json([
            'message' => 'Data pegawai berhasil ditambahkan.',
            'data' => $pegawai
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(pegawai $pegawai)
    {
        return $pegawai;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pegawai = pegawai::findOrFail($id);

        $validated = $request->validate([
            'nama' => 'sometimes|required|string|max:255',
            'jabatan' => 'sometimes|required|string|max:255',
            'gaji' => 'sometimes|required|integer',
        ]);
        $pegawai->update($validated);

        return response()->json([
            'message' => 'Data pegawai berhasil diperbarui.',
            'data' => $pegawai
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pegawai = pegawai::findOrFail($id);
        $pegawai->delete();

        return response()->json([
            'message' => 'Data pegawai berhasil dihapus.'
        ]);
    }
}

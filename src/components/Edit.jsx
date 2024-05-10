import React, { useState } from "react";

function Edit({ editTask, task }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
    //agar saat di klik submit reset semua isi
    setValue("");
  };
  return (
    <div>
      <form className="mb-4 w-full font-primary" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300 focus:border-gray-900"
          placeholder="ubah tugas"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          // memberikan value pada input box value sesuai yang diketik user agar bisa di set kosong lagi oleh fungsi handle submit
          value={value}
        />
        <button className="bg-violet-800 p-4 text-white cursor-pointer ml-2 rounded">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default Edit;

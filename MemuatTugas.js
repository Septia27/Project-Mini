function loadTasks() {
    $.ajax({
        url: '<?= base_url('task/getTasks') ?>',
        dataType: 'json',
        success: function(data) {
            let rows = '';
            $.each(data, function(i, task) {
                rows += `<tr>
                    <td>${task.judul}</td>
                    <td><input type="checkbox" ${task.status == 1 ? 'checked' : ''} onchange="updateStatus(${task.id}, this.checked)"></td>
                    <td>
                        <button onclick="editTask(${task.id})">Edit</button>
                        <button onclick="deleteTask(${task.id})">Hapus</button>
                    </td>
                </tr>`;
            });
            $('#taskTable tbody').html(rows); // Memperbarui isi tabel
        }
    });
}

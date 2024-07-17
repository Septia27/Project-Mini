window.deleteTask = function(id) {
    $.ajax({
        url: `<?= base_url('task/delete/') ?>${id}`,
        type: 'POST',
        success: function() {
            loadTasks(); // Memuat ulang daftar tugas
        }
    });
}

window.updateStatus = function(id, status) {
    $.ajax({
        url: `<?= base_url('task/update/') ?>${id}`,
        type: 'POST',
        data: { status: status ? 1 : 0 },
        success: function() {
            loadTasks(); // Memuat ulang daftar tugas
        }
    });
}

$('#taskForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: '<?= base_url('task/create') ?>',
        type: 'POST',
        data: $(this).serialize(),
        success: function() {
            loadTasks(); // Memuat ulang daftar tugas
            $('#taskForm')[0].reset(); // Mengosongkan formulir
        }
    });
});

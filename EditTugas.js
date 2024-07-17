window.editTask = function(id) {
    $.ajax({
        url: `<?= base_url('task/edit/') ?>${id}`,
        dataType: 'json',
        success: function(task) {
            $('input[name="judul"]').val(task.judul); // Mengisi formulir dengan judul tugas
        }
    });
}

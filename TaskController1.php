<?php

namespace App\Controllers;

use App\Models\TaskModel;

class TaskController extends BaseController
{
    protected $taskModel;

    public function __construct()
    {
        $this->taskModel = new TaskModel();
    }

    public function index()
    {
        return view('tasks/index');
    }

    public function getTasks()
    {
        return json_encode($this->taskModel->findAll());
    }

    public function create()
    {
        $this->taskModel->save([
            'judul' => $this->request->getPost('judul'),
            'status' => 0,
        ]);
        return json_encode(['success' => true]);
    }

    public function update($id)
    {
        $this->taskModel->update($id, [
            'status' => $this->request->getPost('status'),
        ]);
        return json_encode(['success' => true]);
    }

    public function edit($id)
    {
        return json_encode($this->taskModel->find($id));
    }

    public function delete($id)
    {
        $this->taskModel->delete($id);
        return json_encode(['success' => true]);
    }
}

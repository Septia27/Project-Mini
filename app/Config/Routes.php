$routes->get('task', 'TaskController::index');
$routes->post('task/create', 'TaskController::create');
$routes->get('task/getTasks', 'TaskController::getTasks');
$routes->post('task/update/(:num)', 'TaskController::update/$1');
$routes->get('task/edit/(:num)', 'TaskController::edit/$1');
$routes->post('task/delete/(:num)', 'TaskController::delete/$1');

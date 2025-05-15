def includeme(config):
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')

    config.add_route('get_matakuliah', '/api/matakuliah')
    config.add_route('add_matakuliah', '/api/matakuliah')
    config.add_route('update_matakuliah', '/api/matakuliah/{id}')
    config.add_route('delete_matakuliah', '/api/matakuliah/{id}')
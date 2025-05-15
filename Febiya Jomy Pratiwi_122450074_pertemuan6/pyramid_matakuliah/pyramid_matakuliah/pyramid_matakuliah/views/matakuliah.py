from pyramid.view import view_config
from pyramid.response import Response
import json
from ..models import Matakuliah

@view_config(route_name='get_matakuliah', renderer='json', request_method='GET')
def get_matakuliah(request):
    result = request.dbsession.query(Matakuliah).all()
    return [mk.to_dict() for mk in result]

@view_config(route_name='add_matakuliah', renderer='json', request_method='POST')
def add_matakuliah(request):
    data = request.json_body
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    request.dbsession.add(mk)
    return {'status': 'success'}

@view_config(route_name='update_matakuliah', renderer='json', request_method='PUT')
def update_matakuliah(request):
    id_mk = int(request.matchdict['id'])
    data = request.json_body
    mk = request.dbsession.query(Matakuliah).get(id_mk)
    if not mk:
        return Response(status=404)
    mk.kode_mk = data['kode_mk']
    mk.nama_mk = data['nama_mk']
    mk.sks = data['sks']
    mk.semester = data['semester']
    return {'status': 'updated'}

@view_config(route_name='delete_matakuliah', renderer='json', request_method='DELETE')
def delete_matakuliah(request):
    id_mk = int(request.matchdict['id'])
    mk = request.dbsession.query(Matakuliah).get(id_mk)
    if not mk:
        return Response(status=404)
    request.dbsession.delete(mk)
    return {'status': 'deleted'}

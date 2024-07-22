import request2 from '@/utils/request2'

export function fetchList(data) {
  return request2({
    url: '/excel_list/',
    method: 'post',
    data
  })
}

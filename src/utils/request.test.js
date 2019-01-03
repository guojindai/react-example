import request from './request';

describe('request', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('正常数据', () => {
    const mockData = { code: 'SUCCESS', data: { name: '张三' } };
    fetch.once(JSON.stringify(mockData));
    expect.assertions(1);
    return request('abc').then((resp) => {
      expect(resp).toEqual(mockData);
    });
  });
  test('网络错误', () => {
    const mockResp = { status: 404, url: 'abc' };
    fetch.mockResponses([null, mockResp]);
    expect.assertions(2);
    return request('abc').then(() => {
      expect(true).toBe(false);
    }).catch((e) => {
      expect(e.response).toMatchObject(mockResp);
      expect(e.type).toBe('NETWORK');
    });
  });
  test('返回数据格式错误', () => {
    const mockData = 'abcde';
    fetch.once(mockData);
    expect.assertions(2);
    return request('abc').then(() => {
      expect(true).toBe(false);
    }).catch((e) => {
      expect(e.message).toBe(JSON.stringify(mockData));
      expect(e.type).toBe('NETWORK');
    });
  });
  test('返回数据缺少 code 字段', () => {
    const mockData = { a: 1 };
    fetch.once(JSON.stringify(mockData));
    expect.assertions(2);
    return request('abc').then(() => {
      expect(true).toBe(false);
    }).catch((e) => {
      expect(e.message).toBe(JSON.stringify(mockData));
      expect(e.type).toBe('NETWORK');
    });
  });
  test('返回需要全局处理的 code', () => {
    const mockData = { code: 'NOT_FOUND' };
    fetch.once(JSON.stringify(mockData));
    expect.assertions(2);
    return request('abc').then(() => {
      expect(true).toBe(false);
    }).catch((e) => {
      expect(e.name).toBe(mockData.code);
      expect(e.type).toBe('NETWORK');
    });
  })
});

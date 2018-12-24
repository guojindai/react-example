/**
 * mock 工具
 * delay，延迟请求返回
 */

export const delay = (proxy, timer) => {
  const mockApi = {};
  Object.keys(proxy).forEach((key) => {
    const result = proxy[key].$body || proxy[key];
    if (Object.prototype.toString.call(result) === '[object String]' && /^http/.test(result)) {
      mockApi[key] = proxy[key];
    } else {
      mockApi[key] = (req, res) => {
        let foo;
        if (Object.prototype.toString.call(result) === '[object Function]') {
          foo = result;
        } else {
          foo = (req, res) => {
            res.json(result);
          };
        }
        setTimeout(() => {
          foo(req, res);
        }, timer);
      };
    }
  });
  mockApi.__mockData = proxy;
  return mockApi;
}

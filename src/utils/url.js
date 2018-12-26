/**
 * url 相关的工具方法
 */

/**
 * 切掉 path 最后的一段
 * @param {string} path
 * Example: /a/b => /a, /a => /, / => /
 */
export const cutPath = (path) => {
  if (path === '/') {
    return path;
  } else {
    const newPath = path.substring(0, path.lastIndexOf('/'));
    return newPath ? newPath : '/';
  }
}

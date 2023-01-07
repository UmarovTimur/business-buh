export function addClass(node, name) {
   each(name.split(' '), function (cl) {
      return node.classList.add(cl);
   });
}
export function removeClass(node, name) {
   each(name.split(' '), function (cl) {
      return node.classList.remove(cl);
   });
}
export function hasClass(node, name) {
   return node.classList.contains(name);
}


const useOnScroll = (callback) => () => {
	if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
	callback()
	return;
}

export { useOnScroll }
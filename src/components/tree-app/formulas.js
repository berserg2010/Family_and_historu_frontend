export const sizeRectPerson = [0, 0, 200, 100];
export const sizeRectFamily = [0, 0, 200, 50];

export const getWidth = (element) => {
	return element[2] - element[0]
};

export const getHeight = (element) => {
	return element[3] - element[1]
};

export const getCenter = (container, element) => {
	const containerWidth = getWidth(container);
	const containerHeight = getHeight(container);

	const elementWidth = getWidth(element);
	const elementHeight = getHeight(element);

	return [
		(containerWidth - elementWidth) / 2,
		(containerHeight - elementHeight) / 2,
		elementWidth + (containerWidth - elementWidth) / 2,
		elementHeight + (containerHeight - elementHeight) / 2,
	]
};

export const getHusbandPosition = (container, element) => {

};

export const getWifePosition = () => {

};

export const getFamilyPosition = () => {

};

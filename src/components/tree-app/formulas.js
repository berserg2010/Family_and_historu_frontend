export const paddingElement = 25;

export const sizeRectPerson = { width: 200, height: 100 };
export const sizeRectFamily = { width: 200, height: 50 };

const widthHusbandAndWife = 2 * sizeRectPerson.width + 4 * paddingElement;

export const getWidth = (element) => {
	return element[2] - element[0]
};

export const getHeight = (element) => {
	return element[3] - element[1]
};

export const getCenter = (container, element) => {
	return {
		x: (getWidth(container) - element.width - 2 * paddingElement) / 2,
		y: (getHeight(container) - element.height - 2 * paddingElement) / 2,
	}
};

export const getPositionHusband = (container) => {
	const containerWidth = getWidth(container);

  return {
  	x: (containerWidth - widthHusbandAndWife) / 2,
	  y: paddingElement,
  }
};

export const getPositionWife = (container) => {
	const containerWidth = getWidth(container);

	return {
		x: (containerWidth - widthHusbandAndWife) / 2 + sizeRectPerson.width + 2 * paddingElement,
		y: paddingElement,
	}
};

export const getPositionFamily = (container) => {
	const containerWidth = getWidth(container);

	return {
		x: (containerWidth - sizeRectFamily.width - 2 * paddingElement) / 2,
		y: sizeRectPerson.height + 3 * paddingElement,
	}
};

export const compareSize = (boxSize, treeSize) => {
	return boxSize < treeSize;
};

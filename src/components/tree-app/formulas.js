export const paddingElement = 25;

export const sizeRectPerson = { width: 200, height: 100 };
export const sizeRectFamily = { width: 200, height: 50 };

export const getWidth = (container) => {
	return container[2] - container[0]
};

export const getHeight = (container) => {
	return container[3] - container[1]
};

export const getCenter = (container) => {
	return {
		x: getWidth(container) / 2,
		y: getHeight(container) / 2,
	}
};

export const getPositionPersonCenter = (position) => {
	return {
		x: position.x - sizeRectPerson.width / 2,
		y: position.y - sizeRectPerson.height / 2,
	}
};

export const getPositionFamilyCenter = (position) => {
	return {
		x: position.x - sizeRectFamily.width / 2,
		y: position.y - sizeRectFamily.height / 2,
	}
};

export const getPositionHusband = (position) => {
  return {
  	x: position.x - sizeRectPerson.width / 2 - paddingElement,
	  y: position.y - sizeRectPerson.height / 2 - paddingElement,
  }
};

export const getPositionWife = (position) => {
	return {
		x: position.x + sizeRectPerson.width / 2 + paddingElement,
		y: position.y - sizeRectPerson.height / 2 - paddingElement,
	}
};

export const getPositionFamily = (position) => {
	return {
		x: position.x,
		y: position.y + sizeRectFamily.height / 2 + paddingElement,
	}
};

export const getPositionChild = (position) => {
	return {
		x: position.x,
		y: position.y + sizeRectFamily.height + 5 * paddingElement,
	}
};

export const compareSize = (boxSize, treeSize) => {
	return boxSize < treeSize;
};

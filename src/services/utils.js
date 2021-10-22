const utility = {
	updateObject: (oldObject, updatedProperties) => {
		return {
			...oldObject,
			...updatedProperties
		};
	}
};

export default utility;
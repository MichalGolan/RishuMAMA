export const defaultColor = '#6082B6'

const colorArray = [
    { val: '#A81ADB', available: true },
    { val: '#EE4266', available: true },
    { val: '#FFD23F', available: true },
    { val: '#3BCEAC', available: true },
    { val: '#0EAD69', available: true },
    { val: '#eb4b98', available: true },
    { val: '#FF650C', available: true },
    { val: '#E81196', available: true },
    { val: '#6B92EC', available: true },
    { val: '#13D17C', available: true }
]

export const reserveAvailableColor = () => {
    const availableColors = colorArray.filter(color => color.available);
    if(availableColors.length === 0) return defaultColor;

    const index = Math.floor(Math.random() * availableColors.length);
    availableColors[index].available = false;
    return availableColors[index].val;
}

export const releaseColor = (val: string) => {
    const index = colorArray.findIndex(color => color.val === val);
    if(index === -1) return;
    colorArray[index].available = true;
}

export const releaseAllColors = () => {
    colorArray.forEach(color => color.available = true);
}
export const eachCount = (dateList, title) => {
    const result = {};
    dateList.forEach(obj => {
        if (obj.hasOwnProperty(`${title}`)) {
            if (result[obj[title]]) {
                result[obj[title]]++;
            } else {
                result[obj[title]] = 1;
            }
        }
    });
    return result;
}

export const arraysFromObject = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return {keys, values}
}

export const averageAge = (dateList) => {
    if (!Array.isArray(dateList)) {
        return 0
    }
    const sumAge = dateList.reduce((acc, item) => {
        let ageMilliseconds = new Date() - item.birthday
        let ageDate = new Date(ageMilliseconds)
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return acc + age
    }, 0);
    return sumAge / dateList.length;
}

const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
export const averageAgeCountry = (dateList) => {
    const averageAgeByCountry = {};
    let resultAge = []
    dateList.forEach(person => {
        const age = calculateAge(person.birthday);
        if (!averageAgeByCountry[person.citizenship]) {
            averageAgeByCountry[person.citizenship] = [age];
        } else {
            averageAgeByCountry[person.citizenship].push(age);
        }
    })
    for (const country in averageAgeByCountry) {
        const ages = averageAgeByCountry[country];
        resultAge.push(ages.reduce((a, b) => a + b, 0) / ages.length)
    }
    return {values: resultAge, keys: Object.keys(averageAgeByCountry)}
}

export function getMaritalStatusStatistics(peopleList) {
    const uniqueMaritalStatuses = ['В браке', 'Свободен', 'Разведен'];
    const woman = {['В браке']: 0, ['Свободен']: 0, ['Разведен']: 0};
    const man = {['В браке']: 0, ['Свободен']: 0, ['Разведен']: 0};
    peopleList.forEach(obj => {
        if (obj.gender === 'Женский') {
            woman[obj['maritalStatus']] += 1;
        } else {
            man[obj['maritalStatus']] += 1;
        }


    });
    return {uniqueMaritalStatuses, arrayWoman: arraysFromObject(woman), arrayMan: arraysFromObject(man)};
}



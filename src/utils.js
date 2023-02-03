export const baseUrl = "https://randomuser.me/api/";
// AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US

export const countries = [
    {
        name: "Nigeria",
        value: "NL"
    },
    {
        name: "United States",
        value: "US"
    },
    {
        name: "China",
        value: "CH"
    },
    {
        name: "Canada",
        value: "CA"
    },
    {
        name: "Australia",
        value: "AU"
    },
    {
        name: "United Kingdom",
        value: "UK"
    },
    {
        name: "France",
        value: "FR"
    },
    {
        name: "Denmark",
        value: "DK"
    },

]


const downloadFile = ({ data, fileName, fileType }) => {
  
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
}
export const exportToCsv = (items) => {

    let headers = ["gender,name.title,name.first,name.last,email,dob.date,dob.age,nationality,picture.large,picture.medium,picture.thumbnail,registered.date,location.street.number,location.street.name,location.city,location.state,location.country"];
    let usersCsv = items.reduce((acc, user) => {
        const {gender, name, email, registered, dob, nat, picture, location} = user;
        acc.push([gender, name.title, name.first, name.last, email, dob.date, dob.age, nat, picture.large,  picture.medium,  picture.thumbnail, registered.date,  location.street.number, location.street.name, location.city, location.state, location.country]);
        return acc
    }, [])

    downloadFile({
        data: [...headers, ...usersCsv].join('\n'),
        fileName: 'users.csv',
        fileType: 'text/csv'
    })


}
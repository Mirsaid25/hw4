let people = [
    {
        name: 'Malika',
        budget: 20000,
        rent: 12,
        expenses: [
            {
                total: 2000,
                title: 'sousages'
            },
            {
                total: 1200,
                title: 'mobile phone'
            },
            {
                total: 3000,
                title: 'car'
            },
        ]
    },
    {
        name: 'Diyor',
        budget: 20000,
        rent: 12,
        expenses: [
            {
                total: 1500,
                title: 'sousages'
            },
            {
                total: 2200,
                title: 'sousages width ketchup'
            },
            {
                total: 3500,
                title: 'sousages'
            },
        ]
    },
    {
        name: 'Aziz',
        budget: 20200,
        rent: 12,
        expenses: [
            {
                total: 100,
                title: 'girls'
            },
            {
                total: 4200,
                title: 'girls'
            },
            {
                total: 300,
                title: 'girls'
            },
        ]
    },
    {
        name: 'Amir',
        budget: 27000,
        rent: 12,
        expenses: [
            {
                total: 2000,
                title: 'study'
            },
            {
                total: 1000,
                title: 'games'
            },
            {
                total: 5000,
                title: 'clothes'
            },
        ]
    },
    {
        name: 'Maxmudbek',
        budget: 15000,
        rent: 12,
        expenses: [
            {
                total: 1111,
                title: 'sigarets'
            },
            {
                total: 1900,
                title: 'chilim'
            },
            {
                total: 6000,
                title: 'anasha'
            },
        ]
    },
    {
        name: 'Samir',
        budget: 12000,
        rent: 12,
        expenses: [
            {
                total: 1200,
                title: 'food'
            },
            {
                total: 990,
                title: 'car'
            },
            {
                total: 7000,
                title: 'protain'
            },
        ]
    },
    {
        name: 'Badriddin',
        budget: 2000,
        rent: 12,
        expenses: [
            {
                total: 1000,
                title: 'taxi'
            },
            {
                total: 8000,
                title: 'rich girls'
            },
            {
                total: 700,
                title: 'on himself'
            },
        ]
    }
]

// console.log(people[6].expenses[0].total)

for (let item of people){
    let totalOfRent = item.budget - (item.budget * item.rent / 100)
    let total = totalOfRent - (item.expenses[0].total + item.expenses[1].total + item.expenses[2].total)

    document.write(`
    <b style="">Name:</b> <i style="font-weight:900;">${item.name}</i> <br>
    <b style="color:blue;">Было:</b> ${item.budget} <br>
    <b style="color:red;">Расходы:</b> ${(item.budget * item.rent / 100) + (item.expenses[0].total + item.expenses[1].total + item.expenses[2].total)} <br>
    <b style="color:green;">Осталось:</b> ${total}<br><hr>
    `)
}
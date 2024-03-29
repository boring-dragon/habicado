# Habicado ( Part of Taylors college Computing final project)

Habicado is a habit tracking app built to encourage user's to break their bad habits by rewarding them with points when they complete more and more habits. These points (coins) can be used in app to purchase characters for your profile as a collectable that you can store and use.

API at https://github.com/boring-dragon/habit-api

![screenshot](screenshot.png)

![database](database.png)


## Tech used

- Laravel ( API) https://github.com/boring-dragon/habit-api
- Vue
- Nuxt
- Capacitor
- Tailwindcss

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate


#IOS

$ npx cap add ios
 
$ npx cap open ios

```

### TODO

- [x] Design Character Profile Page
- [x] Design and Fix Nav Menu
- [x] Design Settings Page
- [x] Fix registeration and login flow
- [x] Setup Login page
- [x] Design Inventory Page
- [x] Design Mood Card ( Kim )
- [x] Connect Mood Card to API
- [x] Create a wallet for user when they register

- [x] Show Logged in User wallet balance

- [x] Design HomePage
- [x] Design Habbit List Cards

- [x] Habbit Creation Modal Setup
- [x] Account Deleting ( kim)
- [x] Profile Information Update ( kim )

- [x] Add Toast notifications
- [x] Design Habbit Creation Process
- [x] Ability to -1 a target count
- [x] Ability to Mark the Habbit as Completed
- [x] Show a Count Cards on Dashboard ( Completed and pending habits)
- [x] Empty State for Habits listing
- [x] Update wallet count refresh
- [x] Ability to purchase characters from shop
- [x] Load Inventory Dynamically
- [x] Ability to change owned characters from inventory
- [x] Add Points to Wallet when habit is completed
- [x] Show a Pretty Confetti Animation when the habit is completed
- [x] Show currently Active Character
- [x] Get Habbits Created Today for Insight Page
- [x] Make Insight Page Dynamic
- [ ] Fix Bug in mood checking

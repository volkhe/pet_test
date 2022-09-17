/*import { test, expect } from '@playwright/test';

test.describe('Общие проверки', async()=>{

test.beforeEach(async({page})=>{
await page.goto('https://jpetstore.aspectran.com/account/signonForm')
})

test('Проверить url страницы авторизации', async({page})=>{
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
})

test('Проверить наличие и цвета элементов на странице авторизации', async({page})=>{
    const username = page.locator('[name="username"]')
    await expect(username).toBeVisible()
    const password = page.locator ('[name="password"]')
    await expect(password).toBeVisible()
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await expect(loginButton).toHaveCSS('color','rgb(254, 254, 254)')
    await expect(loginButton).toHaveCSS('background-color','rgb(81, 97, 105)')
    const panelRegister = page.locator('[class="panel register"]')
    await expect(panelRegister).toBeVisible()
})

test('Валидные данные в полях → авторизация успешна', async({page})=>{
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa')
   
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium')
   
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()
  
   const elementWelcome = page.locator('[id="WelcomeContent"]')
    await expect(elementWelcome).toBeVisible()
})

test('Невалидные данные в полях → ошибка, авторизация не успешна', async({page})=>{
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa11')
   
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium11')
    
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()
   
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - валидно, поле password - невалидно → ошибка, авторизация не успешна', async({page})=>{
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa')
    
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium11')
  
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()
    
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - невалидно, поле password - валидно → ошибка, авторизация не успешна', async({page})=>{
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa11')
    
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashianrium')
    
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()
    
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поля пустые → ошибка, авторизация не успешна', async({page})=>{

    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
   
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()

    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - валидно, поле password - пустое → ошибка, авторизация не успешна', async({page})=>{

    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('j2ee')
  
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()

    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - пустое, поле password - валидно → ошибка, авторизация не успешна', async({page})=>{

    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
   
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('j2ee')
  
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()

    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})
})

test.describe('Урок 3', async()=>{

    test('Создание локаторов кнопки навигации', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const fish = page.locator('text=Fish').nth(0)
    await expect(fish).toBeVisible()
    const Dogs = page.locator('text=Dogs').nth(0)
    await expect(Dogs).toBeVisible()
    const Reptiles = page.locator('text=Reptiles').nth(0)
    await expect(Reptiles).toBeVisible()
    const Cats = page.locator('text=Cats').nth(0)
    await expect(Cats).toBeVisible()
    const Birds = page.locator('text=Birds').nth(0)
    await expect(Birds).toBeVisible()
})

test('CSS селекторы', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    
    const QuickLinks = page.locator ('#QuickLinks')
    await expect(QuickLinks).toBeVisible()
 
    const Masthead = page.locator('.grid-x').nth(0)
    await expect(Masthead).toBeVisible()
})

test('Фильтрация локаторов', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    const loginButton = page.locator('.button', {hasText:'Login'})
    await expect(loginButton).toBeVisible()
    const panel = page.locator('#Signon', {has: page.locator('.panel')})
    await expect(panel).toBeVisible()
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const header = page.locator('[id="Header"]>>[id="Menu"]')
    await expect(header).toBeVisible()
})
})
test.describe('Урок 4', async()=>{

    test.beforeEach(async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa')
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium')
    const loginButton = page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await loginButton.click()

    test('Проверка цвета элементов блока Pet Favorites', async({page})=>{
    const title = page.locator('text=Pet Favorites')
    await expect(title).toHaveCSS('color', 'rgb(10, 10, 10)')
    await expect(title).toHaveCSS('background-color', 'rgb(245, 245, 245)')
    const infoText = page.locator('text=Shop for more of your favorite pets here.')
    await expect(infoText).toHaveCSS('color', 'rgb(10, 10, 10)')
    await expect(infoText).toHaveCSS('background-color', 'rgb(245, 245, 245)')
    const Manx = page.locator('text=Manx')
    await expect(Manx).toHaveCSS('color', 'rgb(0, 136, 204)')
    await expect(Manx).toHaveCSS('background-color', 'rgb(245, 245, 245)')
    const Persian = page.locator('text=Persian')
    await expect(Persian).toHaveCSS('color', 'rgb(0, 136, 204)')
    await expect(Persian).toHaveCSS('background-color', 'rgb(245, 245, 245)')
    })
    
    test ('Проверка цвета элементов блока навигации', async({page})=>{
        const myOrders = page.locator('text=My Orders')
        const myAccount = page.locator('text=My Account')
        const signOut = page.locator('text=Sign Out')
        const questions = page.locator('text=?')
        await expect(myOrders).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(myOrders).toHaveCSS('background-color', 'rgb(245, 245, 245)')
        await expect(myAccount).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(myAccount).toHaveCSS('background-color', 'rgb(245, 245, 245)')
        await expect(signOut).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(signOut).toHaveCSS('background-color', 'rgb(245, 245, 245)')
        await expect(questions).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(questions).toHaveCSS('background-color', 'rgb(245, 245, 245)')
    })
})
})*/
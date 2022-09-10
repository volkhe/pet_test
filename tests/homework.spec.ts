import { test, expect } from '@playwright/test';
/*
// Урок 2. Первый тест
// Домашнее задание "Проверка страницы авторизации"
// Задание 1
test('Проверить url страницы авторизации', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
})
// Задание 2

test('Наличие поля username', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[name="username"]')
    await expect(locator).toBeVisible()
})

test('Наличие поля password', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[name="password"]')
    await expect(locator).toBeVisible()
})

test('Наличие кнопки login', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[class="button-bar"]').last()
    await expect(locator).toBeVisible()
})

test('Наличие панели регистрации', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    const locator = page.locator('[class="panel register"]')
    await expect(locator).toBeVisible()
})
// Задание 3

test('Валидные данные в полях → авторизация успешна', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Очищаем поле и вводим username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa')
    // Очищаем поле и вводим passsword
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium')
    // Нажимаем login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
   // Проверяем успешность авторизации
   const elementWelcome = page.locator('[id="WelcomeContent"]')
    await expect(elementWelcome).toBeVisible()
})

test('Невалидные данные в полях → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Очищаем поле и вводим username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa11')
    // Очищаем поле и вводим password
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium11')
    // Нажимаем Login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
    // Проверяем ошибку при авторизации
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - валидно, поле password - невалидно → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Очищаем поле и вводим username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa')
    // Очищаем поле и вводим password
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashinarium11')
    // Нажимаем Login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
    // Проверяем ошибку при авторизации
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - невалидно, поле password - валидно → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Очищаем поле и вводим username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('redfoxa11')
    // Очищаем поле и вводим password
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('Mashianrium')
    // Нажимаем Login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
    // Проверяем ошибку при авторизации
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поля пустые → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Очищаем поле username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    // Очищаем поле password
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    // Нажимаем Login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
    // Проверяем ошибку при авторизации
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - валидно, поле password - пустое → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Вводим username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    await fieldUsername.type('j2ee')
    // Очищаем поле password
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    // Нажимаем Login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
    // Проверяем ошибку при авторизации
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})

test('Поле username - пустое, поле password - валидно → ошибка, авторизация не успешна', async({page})=>{

    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    // Очищаем поле username
    const fieldUsername = page.locator('[name="username"]')
    await expect(fieldUsername).toBeVisible()
    await fieldUsername.click()
    await fieldUsername.press('Control+A')
    await fieldUsername.press('Backspace')
    // Очищаем поле и вводим password
    const fieldPassword = page.locator('[name="password"]')
    await expect(fieldPassword).toBeVisible()
    await fieldPassword.click()
    await fieldPassword.press('Control+A')
    await fieldPassword.press('Backspace')
    await fieldPassword.type('j2ee')
    // Нажимаем Login
    const buttonLogin = page.locator('[class="button-bar"]').last()
    await expect(buttonLogin).toBeVisible()
    await buttonLogin.click()
    // Проверяем ошибку при авторизации
    const elementLoginFailed = page.locator('[class="panel failed"]')
    await expect(elementLoginFailed).toBeVisible()
})
*/
 // Урок 3. Способы написания селекторов
 // Задание 1
    test('Создание локаторов с помощью текста', async({page})=>{
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
// Задание 2
test('CSS селекторы', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    //Элемент с ID
    const QuickLinks = page.locator ('#QuickLinks')
    await expect(QuickLinks).toBeVisible()
    // Элемент с классом
    const Masthead = page.locator('.grid-x').nth(0)
    await expect(Masthead).toBeVisible()
})
// Задание 3
test('Фильтрация локаторов', async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    //Фильтрация по тексту
    const loginButton = page.locator('.button', {hasText:'Login'})
    await expect(loginButton).toBeVisible()
    //Фильтрация по другому локатору
    const panel = page.locator('#Signon', {has: page.locator('.panel')})
    await expect(panel).toBeVisible()
    // Обращение к дочернему элементу (родительский - header, дочерний - menu) 
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const header = page.locator('[id="Header"]>>[id="Menu"]')
    await expect(header).toBeVisible()
})

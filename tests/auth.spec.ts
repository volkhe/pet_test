import {expect} from '@playwright/test';
import {test} from '../fixtures/authFixture';

test.describe.only('Общие проверки', async()=>{ 

test.beforeEach(async({page})=>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
            })
test('Проверить url страницы авторизации', async({page})=>{
    await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
            })

test('Проверить наличие и цвета элементов на странице авторизации', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await expect(authPage.password).toBeVisible()
    await expect(authPage.loginButton).toBeVisible()
    await expect(authPage.loginButton).toHaveCSS('color','rgb(254, 254, 254)')
    await expect(authPage.loginButton).toHaveCSS('background-color','rgb(81, 97, 105)')
    await expect(authPage.panelRegister).toBeVisible()
})
test('Валидные данные в полях → авторизация успешна', async({authPage})=>{
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
    await authPage.username.type('redfoxa')
   
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    await authPage.password.type('Mashinarium')
   
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()
  
    await expect(authPage.elementWelcome).toBeVisible()
})

test('Невалидные данные в полях → ошибка, авторизация не успешна', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
    await authPage.username.type('redfoxa11')
   
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    await authPage.password.type('Mashinarium11')
    
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()

    await expect(authPage.elementLoginFailed).toBeVisible()
})

test('Поле username - валидно, поле password - невалидно → ошибка, авторизация не успешна', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
    await authPage.username.type('redfoxa')
    
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    await authPage.password.type('Mashinarium11')
  
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()
    
    await expect(authPage.elementLoginFailed).toBeVisible()
})

test('Поле username - невалидно, поле password - валидно → ошибка, авторизация не успешна', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
    await authPage.username.type('redfoxa11')
    
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    await authPage.password.type('Mashianrium')
    
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()
    
    await expect(authPage.elementLoginFailed).toBeVisible()
})
test('Поля пустые → ошибка, авторизация не успешна', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
   
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()

    await expect(authPage.elementLoginFailed).toBeVisible()
})
test('Поле username - валидно, поле password - пустое → ошибка, авторизация не успешна', async({authPage})=>{
    await expect(authPage.username).toBeVisible()
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
    await authPage.username.type('j2ee')
  
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()

    await expect(authPage.elementLoginFailed).toBeVisible()
})
test('Поле username - пустое, поле password - валидно → ошибка, авторизация не успешна', async({authPage})=>{

    await expect(authPage.username).toBeVisible()
    await authPage.clickUsernameField()
    await authPage.clearFieldUsername()
   
    await expect(authPage.password).toBeVisible()
    await authPage.clickPasswordField()
    await authPage.clearFieldPassword()
    await authPage.password.type('j2ee')
  
    await expect(authPage.loginButton).toBeVisible()
    await authPage.clickLoginButton()

    await expect(authPage.elementLoginFailed).toBeVisible()
})
})
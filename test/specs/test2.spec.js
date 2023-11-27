describe('Demo Tests', function() {

    it('My first test', async () => {
        


        browser.url('https://rozetka.com.ua/ua/')

        await $('[name="search"]').setValue('Трусы')
        //await $('[name="btnk"]').click()
        browser.keys('Enter')
        
        browser.pause(6000)
    })
})
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function connections() {
while(1){

    while(1){
        users = document.getElementsByClassName('search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary');
        if (users.length != 10){
			for (i=4;i>=0;i--){
			window.scrollTo(0,document.body.scrollHeight/i);
			await sleep(1000);
			}
        }
        else{
            break;
        }
    }
    
    titles = document.getElementsByClassName('subline-level-1 t-14 t-black t-normal search-result__truncate')
    names = document.getElementsByClassName('name actor-name');

    for (i = 0; i < 10; i++) {
        if (document.body.innerText.search('invitation limit') != -1){
            location.reload()
        }
		await sleep(2000);
		if (users[i].innerText == "Connect") {
            console.log(i + "- " + names[i].innerText + " - " + titles[i].innerText);
            users[i].click();
            await sleep(2000);
			
			if (document.getElementsByClassName('artdeco-modal__content ember-view')[0].innerText.search('You can add a note to personalize your invitation') != -1){
				document.getElementsByClassName('ml1 artdeco-button artdeco-button--3 artdeco-button--primary ember-view')[0].click()
			}
			else{
				document.getElementsByClassName('artdeco-modal__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view')[0].click()
			}
        }
    }
    await sleep(2000)
    document.getElementsByClassName('artdeco-pagination__button artdeco-pagination__button--next artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view')[0].click()
    await sleep(3000)
    }
}
    
connections();

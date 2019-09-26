/**
 * Funções de Acessibilidade do Portal
 * (vanilla javascript)
 */

/*alto contraste*/
(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();



/*mudar tamanho da fonte*/
(function () {
    var FontSize = {
        storage: 'FontSizeState',
        check: checkFontSize,
        getState: getFontSizeState,
        setState: setFontSizeState,
        updateView: updateViewFontSize,
        
        reset: resetSize,
        increase: increaseFontSize,
        decrease: decreaseFontSize
    };

    window.resetFontSize = function () { FontSize.reset(); };
    window.increaseFontSize = function () { FontSize.increase(); };
    window.decreaseFontSize = function () { FontSize.decrease(); };

    FontSize.check();

    function checkFontSize() {
        this.updateView();
    }

    function getFontSizeState() {
    if(localStorage.getItem(this.storage) === null)
    this.setState(100);
   
        return parseInt(localStorage.getItem(this.storage));
    }

    function setFontSizeState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.updateView();
    }

    function updateViewFontSize() {
        var html = document.querySelector("html");
        html.style.fontSize = this.getState()+"%";
    }
    
    function resetSize() {
        this.setState(100);
    }
    
    function increaseFontSize() {
    if(this.getState() < 190)
    this.setState(this.getState()+10);
    }
    
    function decreaseFontSize() {
    if(this.getState() > 75)
    this.setState(this.getState()-10);
    }
    
    
})();
const dom = document.createElement('div');
dom.innerHTML = `
<div class="container mt-5">
       <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 text-center shadow pb-3">
                <div class="row py-3 my-3 full-width">
                    <div class="col title">
                        calculator
                    </div>
                </div>
                <div class="row">
                    <div class="col my-3">
                        <textarea class="full-width p-3 text-right" readonly id="history" rows="4"></textarea>
                <div class="row pt-3">
                    <div class="col-10">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="full-width" id="result">
                            </div>
                            <div class="row mainno">
                                <div class="col-4">
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=1 class="full-width" onclick="dis('1')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=4 class="full-width" onclick="dis('4')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=7 class="full-width" onclick="dis('7')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=. class="full-width" onclick="dis('.')"> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=2 class="full-width" onclick="dis('2')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=5 class="full-width" onclick="dis('5')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=8 class="full-width" onclick="dis('8')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=0 class="full-width" onclick="dis('0')"> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=3 class="full-width" onclick="dis('3')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=6 class="full-width" onclick="dis('3')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value=9 class="full-width" onclick="dis('9')"> 
                                        </div>
                                    </div>
                                    <div class="row py-1">
                                        <div class="col">
                                            <input type="button" value="=" class="full-width" onclick="solve(event)"> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row py-1">
                            <div class="col">
                                <input type="button" value="c" class="full-width" onclick="clr()">
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col">
                                <input type="button" value="/" class="full-width" onclick="dis('/')">
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col">
                                <input type="button" value="-" class="full-width" onclick="dis('-')">
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col">
                                <input type="button" value="+" class="full-width" onclick="dis('+')">
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col">
                                <input type="button" value="*" class="full-width" onclick="dis('*')">
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col">
                                <input type="button" value="%" class="full-width" onclick="dis('%')">
                            </div>
                        </div>
                    </div>
                    <div class="row py-1">
                        <div class="col">
                            <input type="button" class="full-width" value="Clear history" id="reset" onclick="clrhsty()">
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    </div>
`;
document.querySelector(".main").append(dom);
function clr(){
    document.querySelector('#result').value="";
}
function dis(valueclk){
  document.querySelector('#result').value+=valueclk;
}
function clrhsty(){
    document.querySelector('#history').value=""; 
}
function solve(event){
    event.preventDefault();
    let textareaelement = document.querySelector('#history'); 
    let x = document.querySelector('#result').value;
    let y = eval(x);
    clr();
    textareaelement.value = textareaelement.value + x + "=" + y +'\n';
}
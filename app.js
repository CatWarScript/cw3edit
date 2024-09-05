'use strict'

const csDefaults = {
   'cgBorderWid': 3 ,'cgBorderType': 'solid' ,'cgBorderCol': '#000000' ,'cgBorderRad': 6 ,'cgIsBorderRad': true
   ,'cgBodyCol': '#ff0000' ,'cgFieldWid': '' ,'cgFieldHei': '' ,'cgFieldX': 500 ,'cgFieldY': 500 ,'cgIsFieldFix': false
   ,'cgParWid': 500 ,'cgParHei': 500 ,'cgParX': 500 ,'cgParY': 500 ,'cgParCol': '#ffdead', 'cgParFCol': '#000000'
   ,'cgTOSWid': 500 ,'cgTOSHei': 500 ,'cgTOSX': 500 ,'cgTOSY': 500, 'cgTOSCol': '#000000'
   ,'cgSkyWid': 500 ,'cgSkyHei': 500 ,'cgSkyX': 500 ,'cgSkyY': 500
   ,'cgSmallWid': 500 ,'cgSmallHei': 500 ,'cgSmallX': 500 ,'cgSmallY': 500, 'cgSmallCol': '#ffdead', 'cgSmallFCol': '#000000'
   ,'cgOCLWid': 500 ,'cgOCLHei': 500 ,'cgOCLX': 500 ,'cgOCLY': 500, 'cgOCLFCol': '#000000'
   ,'cgChatWid': 500 ,'cgChatHei': 500 ,'cgChatX': 500 ,'cgChatY': 500 ,'cgChatCol': '#f57a00', 'cgChatFCol': '#000000'
   ,'cgClockWid': 500 ,'cgClockHei': 500 ,'cgClockX': 500 ,'cgClockY': 500 ,'cgClockCol': '#ffdead', 'cgClockFCol': '#000000'
   ,'cgTBWid': 500 ,'cgTBHei': 500 ,'cgTBX': 500 ,'cgTBY': 500 ,'cgTBCol': '#ffdead', 'cgTBFCol': '#000000'
   ,'cgHisWid': 500 ,'cgHisHei': 500 ,'cgHisX': 500 ,'cgHisY': 500 ,'cgHisCol': '#ffdead', 'cgHisFCol': '#000000'
   ,'cgDeysWid': 500 ,'cgDeysHei': 500 ,'cgDeysX': 500 ,'cgDeysY': 500 ,'cgDeysCol': '#ffdead', 'cgDeysFCol': '#000000'
   ,'cgRotWid': 500 ,'cgRotHei': 500 ,'cgRotX': 500 ,'cgRotY': 500 ,'cgRotCol': '#ffdead', 'cgRotFCol': '#000000'
   ,'cgLocWid': 500 ,'cgLocHei': 500 ,'cgLocX': 500 ,'cgLocY': 500 ,'cgLocCol': '#ffffff', 'cgLocFCol': '#000000'
   ,'cgRSWid': 500 ,'cgRSHei': 500 ,'cgRSX': 500 ,'cgRSY': 500 ,'cgRSCol': '#ffdead', 'cgRSFCol': '#000000'
   ,'cgParAlertWid': 'h' ,'cgParAlertHei': 'u' ,'cgParAlertCol': 'i' ,'cgParAlertX': 500 ,'cgParAlertY': 500 ,'cgParAlertFCol': '#000000'
   ,'cgInfoH2DelMargins': true
   ,'cgInfoH2FontSize': 22
   ,'cgDelRSH2': false
   ,'cgDelHisH2': false
   ,'cgDelParH2': false
   ,'cgSeparateLocation': true
   ,'cgLocFW': 17 // фонт вейт локации
   ,'cgFontSize': 14 // Фонт вейт всего нахуй
   ,'cgBorders': true
   ,'cgTbBorder': true
   ,'cgSmallFW': 14 // Смалл фонт вейт
   ,'cgYouBG': ''  // Фон упомянания
   ,'cgYouFC': '' // Цвет упомянания
   ,'cgInputCol': '#ffffff'
   ,'cgInputFCol': '#000000'
   ,'cgInputBorders': true
   ,'cgIsTBBorderRad': true
   ,'cgIsLocBorderRad': true
   ,'cgDeleteScrolls': true
   ,'cgChatSliderCol': '#fece2f'
   ,'cgChatSliderBorderCol': '#d19405'
   ,'ctTecPosX': 50 //          (beta)    Положение инструмента отладки (Слева)
   ,'ctTecPosY': 50 //          (beta)    Положение инструмента отладки (Сверху)
   ,'cgChatSliderLineCol': '#ebebeb'
   ,'cgChatSliderLineBorder': '#a5a5a5'
};

try {
    if (isCW3) cw3();
    if (isDM) dm();
    if (isSite) site();
    if (isSett) sett();
    if (isMyCat) myCat();
    if (isAll) all();
    if (isFae) fae();
    if (isBlogs) blogs();
    if (isChat) chat();
    if (isCustom) custom();
  }
  catch (error) {
    console.error("An error occurred: ", error);
  }
  
const globals = {};
for (var key in csDefaults) {
 let settings = getSettings(key);
 if (settings === null) {
   globals[key] = csDefaults[key];
 }
 else {
   if (Array.isArray(csDefaults[key])) {
     globals[key] = JSON.parse(settings);
   }
   else if (typeof csDefaults[key] === 'number') {
     globals[key] = parseFloat(settings);
   }
   else {
     globals[key] = settings;
   }
 }
}

function getSettings(key) {
 let setting = 'cs_n_' + key;
 let val = window.localStorage.getItem(setting);
 switch (val) {
   case null:
     return null;
   case 'true':
     return true;
   case 'false':
     return false;
   default:
     return val;
 }
}

function setSettings(key, val) {
 let setting = 'cs_n_' + key;
 window.localStorage.setItem(setting, String(val));
 globals[key] = val; // Записываем новое значение в globals
}

function removeSettings(key) {
 let setting = 'cs_n_' + key;
 window.localStorage.removeItem(setting);
}
let html = `
<div id="app" data-mobile="0" data-time="1722258742" style="display: block;">
   <span class="other_cats_list"><a href="#">Дурное Сновидение</a></span><br> 
   <p id="error"></p>
   <div id="achievement" class="">
      <div id="achievement_img"><img src="/achievement/0.png"></div>
      <div id="achievement_container">
         <div id="achievement_top">Получено достижение!</div>
         <div id="achievement_name"></div>
         <div id="achievement_text"></div>
      </div>
      <div id="close_achievement" class="no-select">×</div>
   </div>
   <div id="timer"></div>
   <div id="fightPanel" style="display: none; width: 320px;">
      <img src="symbole/unlock.png" id="block"> <input type="button" value="I" class="hotkey"><input type="button" value="O" class="hotkey"><input type="button" value="L" class="hotkey"><input type="button" value="J" class="hotkey"><input type="button" value="K" class="hotkey"><input type="button" value="T+1" class="hotkey"><input type="button" value="T+2" class="hotkey"><input type="button" value="T+3" class="hotkey"> 
      <div id="fightLog" style="height: 70px;"></div>
   </div>
   <span class="small"><a href="/">Мой кот</a> |
   <a href="/chat">Чат</a> <span id="newchat"></span> |
   <a href="/ls">ЛС</a> <span id="newls"></span></span><br> 
   <table id="main_table" style="border-spacing: 2px;">
      <tbody>
         <tr id="tr_chat">
            <td>
               <form id="chat_form">
                  <span id="txt">
                     <input maxlength="255" size="50" id="text" autocomplete="off"> <!----> <!---->
                  </span>
                  <input type="submit" id="msg_send" value="OK"> <!----> <span><span id="volume" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 50%;"></span></span> <b>(правее — громче)</b></span>
               </form>
               <div id="chat_msg">
                  <hr>
               </div>
            </td>
         </tr>
         <tr id="tr_actions">
            <td>
               <span class="title">Действия</span> 
               <div id="block_deys">
                  <table style="width: 100%;">
                     <tbody>
                        <tr>
                           <td style="width: 70%;">
                              <div id="akten">
                                 <!----> <a href="#" data-id="13" class="dey"><img src="/13.png" loading="lazy" title="Принюхаться"></a><a href="#" data-id="17" class="dey"><img src="/17.png" loading="lazy" title="Копать землю"></a><a href="#" data-id="27" class="dey"><img src="/27.png" loading="lazy" title="Встать в боевую стойку"></a> <a href="#" data-id="flowers" class="specialAct" style="display: none;"><img src="https://catwar.su/cw3/actions/flowers.png" loading="lazy"></a> 
                              </div>
                              <div id="dein">
                              </div>
                           </td>
                           <td>
                              Действия с каким-либо котом в соседней клетке:<br> 
                              <select id="mit">
                                 <option value="0">Действия с собой</option>
                                 <option value="1293224">Дурное Сновидение</option>
                              </select>
                              <br> <input type="button" id="mitok" value="Показать">
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div id="block_mess"></div>
            </td>
         </tr>
<div id="clockContainer"><div id="clock">18:52:15</div><div id="date">Понедельник, 29 июля</div></div>
         <tr id="tr_tos">
            <td>
               <table>
                  <tbody>
                     <tr>
                        <td>
                           <!----> <!---->
                        </td>
                        <td>
                           <div id="tos" style="background: #6593B6;background: -moz-linear-gradient(0deg, #90B9D0, #3B6C9B);background: -webkit-linear-gradient(0deg, #90B9D0, #3B6C9B);background: -o-linear-gradient(0deg, #90B9D0, #3B6C9B);background: -ms-linear-gradient(0deg, #90B9D0, #3B6C9B);background: linear-gradient(90deg, #90B9D0, #3B6C9B);"></div>
                        </td>
                        <td><a href="/time" target="_blank" id="hour"><img src="/hours15.png"></a></td>
                        <td><a href="/time" target="_blank"><img src="/season0.png"></a></td>
                        <!---->
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
         <tr id="tr_sky">
            <td>
               <div id="sky" style="background-image: url(/sky5.png);"></div>
            </td>
         </tr>
         <tr id="tr_field">
            <td id="act">
               <div id="cages_overflow">
                  <div id="cages_div" style="opacity: 1; background-image: url(/73033.jpg);">
                     <table id="cages">
                        <tbody>
                           <tr>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                                <td class="cage">
                                <div class="cage_items">
                                    <span class="catWithArrow">
                                        <div style="position: relative;">
                                            <div id="arrow1293224" class="arrow arrow-teeth" style="top: 75px; transform: rotate(157deg); opacity: 1;">
                                            <table style="width: 100px;">
                                                <tbody>
                                                    <tr>
                                                        <td class="arrow_red" style="width: 0px;"></td>
                                                        <td class="arrow_green" style="width: 50px;"></td>
                                                        <td style="width: 50px;"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        <span class="cat">
                                            <div data-v-59afe5e8="" class="d dead">
                                            <div data-v-59afe5e8="" class="first" style="background-size: 100%; background-image: url('/dursnov.png'); position: absolute;"></div>
                                            <div data-v-59afe5e8="" class="" style="background-size: 100%; background-image: url(&quot;/cw3/cats/0/costume/795.png&quot;); position: absolute;"></div>
                                            </div>
                                            <!----> <!----> 
                                            <span class="cat_tooltip">
                                            <u><a href="/cat1293224">Дурное Сновидение</a></u><br> <!----> <!----> 
                                            <div><small><i>Главный админ 😨</i></small></div>
                                            У него во рту:
                                            <ol class="mouth">
                                                <li><img src="/647.png"></li>
                                                <li><img src="/344.png"></li>
                                                <li><img src="/341.png"></li>
                                            </ol>
                                            Его запах:<br> <img src="/51.png"><br> <a class="cws-show-more" href="#" data-id="1293224">Подробнее</a><br><span class="online">[ <font color="#006400">В игре</font> ]</span>
                                            </span>
                                            <!---->
                                        </span>
                                    </span>
                                    <!---->
                                </div>
                                </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <span class="catWithArrow">
                                       <!----> 
                                       <span class="cat">
                                          <div data-v-59afe5e8="" class="d">
                                             <div data-v-59afe5e8="" class="first" style="background-size: 86%; background-image: url('/zapal.png'); position: absolute;"></div>
                                             <div data-v-59afe5e8="" class="" style="background-size: 86%; background-image: url('https://catwar.su/cw3/cats/0/costume/143.png'); position: absolute;"></div>
                                          </div>
                                          <!----> <!----> 
                                          <span class="cat_tooltip">
                                             <u><a href="/cat1562064">Звёздный Запал</a></u><br> <!----> 
                                             <div><small><i>Предводитель</i></small></div>
                                             У него во рту:
                                             <ol class="mouth">
                                                <li><img src="/647.png"></li>
                                                <li><img src="/2896.png"></li>
                                             </ol>
                                             Его запах:<br> <img src="/3.png"><br> <span class="online">[ <font color="#006400">В игре</font> ]</span>
                                          </span>
                                          <!---->
                                       </span>
                                    </span>
                                    <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage" style="background: url(&quot;weather/puddle_1.png) 0px 0px;">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <span class="move_parent"><img src="/73000.png" class="move_img"> <span class="move_name">Камышовая поляна</span></span>
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <span class="move_parent"><img src="/73000.png" class="move_img"> <span class="move_name">Мшистая полянка</span></span>
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <span class="catWithArrow">
                                       <!----> 
                                       <span class="cat">
                                          <div data-v-59afe5e8="" class="d">
                                             <div data-v-59afe5e8="" class="first" style="background-size: 73%; background-image: url(&quot;/cw3/composited/b0e10b7f6a836277.png); position: absolute;"></div>
                                             <div data-v-59afe5e8="" class="" style="background-size: 73%; background-image: url(&quot;/cw3/cats/0/defects/dirt/base/1/1.png); position: absolute;"></div>
                                             <div data-v-59afe5e8="" class="" style="background-size: 73%; background-image: url(&quot;/cw3/cats/0/defects/dirt/base/1/tail/6/1.png); position: absolute;"></div>
                                          </div>
                                          <!----> <!----> 
                                          <span class="cat_tooltip">
                                             <u><a href="/cat1601347">Выдролап</a></u><br> <!----> 
                                             <div><small><i>Оруженосец</i></small></div>
                                             <!---->
                                             Его запах:<br> <img src="odoroj/3.png"><br> <span class="online">[ <font color="#A52A2A">Спит</font> ]</span>
                                          </span>
                                          <!---->
                                       </span>
                                    </span>
                                    <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <span class="catWithArrow">
                                       <!----> 
                                       <span class="cat">
                                          <div data-v-59afe5e8="" class="d">
                                             <div data-v-59afe5e8="" class="first" style="background-size: 82%; background-image: url(&quot;/cw3/composited/5cb240656bc1a2e5.png); position: absolute;"></div>
                                             <div data-v-59afe5e8="" class="" style="background-size: 82%; background-image: url(&quot;/cw3/cats/0/costume/797.png); position: absolute;"></div>
                                             <div data-v-59afe5e8="" class="" style="background-size: 82%; background-image: url(&quot;/cw3/cats/0/defects/trauma/1.png); position: absolute;"></div>
                                          </div>
                                          <!----> <!----> 
                                          <span class="cat_tooltip">
                                             <u><a href="/cat1567977">Шутовка</a></u><br> <!----> 
                                             <div><small><i>Королева</i></small></div>
                                             У неё во рту:
                                             <ol class="mouth">
                                                <li><img src="https://catwar.su/cw3/things/560.png"></li>
                                             </ol>
                                             Её запах:<br> <img src="odoroj/3.png"><br> <span class="online">[ <font color="#333333">Недавно ушла</font> ]</span>
                                          </span>
                                          <!---->
                                       </span>
                                    </span>
                                    <!---->
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <span class="move_parent"><img src="/9000.png" class="move_img"> <span class="move_name">Галечный берег</span></span>
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="cage">
                                 <div class="cage_items" style="background: url(/647.png) 100% 100% no-repeat, url(/647.png) 0% 100% no-repeat, url(/3190.png) 100% 0% no-repeat, url(/418.png) 0% 0% no-repeat;">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items" style="background: url(/1035.png) 0% 100% no-repeat, url(/1035.png) 100% 0% no-repeat, url(/1035.png) 0% 0% no-repeat;">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <span class="move_parent"><img src="/9000.png" class="move_img"> <span class="move_name">Шелестящий тростник</span></span>
                                 </div>
                              </td>
                              <td class="cage">
                                 <div class="cage_items">
                                    <!----> <!---->
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <!----> <!---->
                  </div>
               </div>
            </td>
         </tr>
         <tr id="tr_mouth">
            <td>
               <span class="title">Во рту</span> 
               <div id="itemList">
                  <div id="37911598" class="itemInMouth"><img src="/2896.png"></div>
               </div>
               <a href="#">Смешивать</a> <!----><br><br> 
               <div id="thdey" style="display: none;">
                  <ul style="margin: 0px; padding: 0px 0px 0px 1.4em;">
                     <li><a href="#" id="eat"></a></li>
                     <li><a href="#" id="put">Положить на землю</a></li>
                     <li>Осмотреть (<a href="#">поверхностно</a> или
                        <a href="#">тщательно</a>)
                     </li>
                     <!----> <!----> 
                     <li><a href="#">Закопать</a></li>
                     <li><a href="#">Закрепить</a></li>
                     <!----> 
                     <li>Уникальный ID: </li>
                  </ul>
                  <br> 
                  <div id="layer" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 0%;"></span></div>
                  <br>
                  Чем правее, тем глубже будет закопан предмет. <a href="/about?id=12" target="_blank">[?]</a><br><br>
               </div>
               <div id="ctdey" style="display: none;">
                  <ul style="margin: 0px; padding: 0px 0px 0px 1.4em;">
                     <li><a href="#" id="put2">Положить на землю</a></li>
                     <li><a href="/cat0" target="_blank">Перейти в профиль</a></li>
                  </ul>
               </div>
            </td>
         </tr>
         <tr id="tr_info">
            <td>
               <table id="info_main">
                  <tbody>
                     <tr>
                        <td id="family" class="infos">
                           <h2><a href="#" id="relatives" class="toggle">Родственные связи</a></h2>
                           <div id="relatives_block">
                              <div id="family_block"><b>Мама</b>: <a href="/cat920769">Линь</a><br><b>Папа</b>: <a href="/cat1454689">Омуль</a><br><b>Братья и сёстры</b>: <a href="/cat1252965">Неугодненький</a>, <i><a href="/cat1394475">Шутливая Проказница</a></i>, <i><a href="/cat1535768">Крик Галки</a></i>, <i><a href="/cat1541622">Душевная Боль</a></i>, <i><a href="/cat1569026">Крик</a></i>, <a href="/cat1572997">Мурчишка</a>, <i><a href="/cat1608702">Дятлушенька</a></i><br><b>Котята</b>: <i><a href="/cat1579700">Высокомерие</a></i>, <i><a href="/cat1597691">Солнцещёкая</a></i><br><br><i>Курсивом</i> выделены приёмные родственники.</div>
                              <a href="/relatives">Генеалогический кустик</a> 
                              <div id="pairs">
                                 <img src="/img/loading.gif" id="pairs-loading" style="margin-top: 5px; display: none;"> 
                                 <p>
                                    Вы стали парой с кошкой по имени <a href="/cat936551">Задорница</a> на <span data-who="936551" class="pair">65.3</span>%.
                                    <a href="#" title="Разлюбить" class="pair-delete"><img src="/pair_delete.png"></a> <a href="#" title="Усыновить/удочерить кого-либо" class="adopt"><img src="/pair_adopt.png"></a> <!---->
                                 </p>
                              </div>
                           </div>
                        </td>
                        <td id="history" class="infos">
                           <h2><a href="#" id="history" class="toggle">История</a></h2>
                           <div id="history_block">
                              <span id="ist">История очищена. Вылизался. Вылизался. Принюхался. Принюхался. Пошёл в локацию «Мель». Пошёл в локацию «Глубина». Пошёл в локацию «Дно реки». Нырнул. Не нашёл ничего интересного. Нырнул. Обнаружил мох. Нырнул. Не нашёл ничего интересного. Пошёл в локацию «Глубина». Отменил действие. Пошёл в локацию «Глубина». Пошёл в локацию «Мель». Положил на землю чёрный ошейник. Поднял с земли камень. Положил на землю мох. Положил на землю камень. Поднял с земли чёрный ошейник. Пошёл в локацию «Галечный берег». Поспал. Поспал. Принюхался. Принюхался. Принюхался. Поспал. Поспал. Вылизался. Пошёл в локацию «Камышовые заросли».</span><br> <a href="#" id="history_clean">Очистить историю</a> 
                              <div style="background-color: white;">
                                 Моё местонахождение: <span id="location">Камышовые заросли</span>
                              </div>
                           </div>
                        </td>
                        <td id="parameter" class="infos">
                           <h2><a href="#" id="parameters" class="toggle">Параметры и навыки</a><a id="parameters-alert" href="#">+</a></h2>
                           <div id="parameters_block">
                              <table id="dream_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -30px"></div>
                                       </td>
                                       <td>
                                          <span id="dream">
                                             <table class="parameter">
                                                <tbody>
                                                   <tr>
                                                      <td style="width: 150px; background-color: green;"></td>
                                                      <td style="background-color: red; width: 0px;"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="hunger_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -60px"></div>
                                       </td>
                                       <td>
                                          <span id="hunger">
                                             <table class="parameter">
                                                <tbody>
                                                   <tr>
                                                      <td style="width: 109px; background-color: green;"></td>
                                                      <td style="background-color: red; width: 41px;"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="thirst_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -15px"></div>
                                       </td>
                                       <td>
                                          <span id="thirst">
                                             <table class="parameter">
                                                <tbody>
                                                   <tr>
                                                      <td style="width: 87px; background-color: green;"></td>
                                                      <td style="background-color: red; width: 63px;"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="need_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -45px"></div>
                                       </td>
                                       <td>
                                          <span id="need">
                                             <table class="parameter">
                                                <tbody>
                                                   <tr>
                                                      <td style="width: 0px; background-color: green;"></td>
                                                      <td style="background-color: red; width: 150px;"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="health_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" id="vundo_icon" style="background-position: 0px -90px"></div>
                                       </td>
                                       <td>
                                          <span id="health">
                                             <table class="parameter">
                                                <tbody>
                                                   <tr>
                                                      <td style="width: 150px; background-color: green;"></td>
                                                      <td style="background-color: red; width: 0px;"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="clean_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -120px"></div>
                                       </td>
                                       <td>
                                          <span id="clean">
                                             <table class="parameter">
                                                <tbody>
                                                   <tr>
                                                      <td style="width: 150px; background-color: green;"></td>
                                                      <td style="background-color: red; width: 0px;"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <hr>
                              <table id="smell_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" id="smell_icon" style="background-position: 0px 0px"></div>
                                       </td>
                                       <td>
                                          <span id="smell">
                                             <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                   <tr>
                                                      <td>
                                                         <table class="parameter">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="width:17px;background-color:green"></td>
                                                                  <td style="background-color:#ccc;width:133px"></td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                      <td>&nbsp;<b>7</b></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="dig_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -105px"></div>
                                       </td>
                                       <td>
                                          <span id="dig">
                                             <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                   <tr>
                                                      <td>
                                                         <table class="parameter">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="width:94px;background-color:green"></td>
                                                                  <td style="background-color:#ccc;width:56px"></td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                      <td>&nbsp;<b>4</b></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="swim_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -135px"></div>
                                       </td>
                                       <td>
                                          <span id="swim">
                                             <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                   <tr>
                                                      <td>
                                                         <table class="parameter">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="width:11px;background-color:green"></td>
                                                                  <td style="background-color:#ccc;width:139px"></td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                      <td>&nbsp;<b>8</b></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="might_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -150px"></div>
                                       </td>
                                       <td>
                                          <span id="might">
                                             <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                   <tr>
                                                      <td>
                                                         <table class="parameter">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="width:150px;background-color:green"></td>
                                                                  <td style="background-color:#ccc;width:0px"></td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                      <td>&nbsp;<b>9</b></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="tree_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -195px"></div>
                                       </td>
                                       <td>
                                          <span id="tree">
                                             <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                   <tr>
                                                      <td>
                                                         <table class="parameter">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="width:150px;background-color:green"></td>
                                                                  <td style="background-color:#ccc;width:0px"></td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                      <td>&nbsp;<b>9</b></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table id="observ_table">
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="symbole" style="background-position: 0px -210px"></div>
                                       </td>
                                       <td>
                                          <span id="observ">
                                             <table cellspacing="0" cellpadding="0">
                                                <tbody>
                                                   <tr>
                                                      <td>
                                                         <table class="parameter">
                                                            <tbody>
                                                               <tr>
                                                                  <td style="width:93px;background-color:green"></td>
                                                                  <td style="background-color:#ccc;width:57px"></td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                      </td>
                                                      <td>&nbsp;<b>6</b></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <!----><input class="cs-set" id="turnOnLightCatWar" type="checkbox" checked="" style="display: none;"><label class="cs-set" for="turnOnLightCatWar" style="display: none;">Облегчалочка</label>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <p><b>Тёмные баллы (шанс попасть в Сумрачный лес после смерти):</b> <span id="black">0</span></p>
</div>

    <div id="compactTool">
    <div id="ctHeader">Настройка компактной игровой</div>
    <div id="ctFolderBtns"><span id="folHandle1">1</span><span id="folHandle2">2</span><span id="folHandle3">3</span></div>
      <div id="ctInputs">
        <div id="folder1" class="folder active">
        <table>
          <tr>
            <td>
              Блок
            </td><td>
              Фоновый цвет
            </td><td>
              Позиция (гор)
            </td><td>
              Позиция (вер)
            </td><td>
              Ширина
            </td><td>
              Высота
            </td><td>
              Цвет текста
            </td>
          </tr>
          <tr>
            <td>
              История
            </td><td>
            <input class="cs-set" id="cgHisCol" type="color"${globals.cgHisCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgHisX" type="number"${globals.cgHisX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgHisY" type="number"${globals.cgHisY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgHisWid" type="number"${globals.cgHisWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgHisHei" type="number"${globals.cgHisHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
              <input class="cs-set" id="cgHisFCol" type="color"${globals.cgHisFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Параметры
            </td><td>
            <input class="cs-set" id="cgParCol" type="color"${globals.cgParCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgParX" type="number"${globals.cgParX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgParY" type="number"${globals.cgParY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgParWid" type="number"${globals.cgParWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgParHei" type="number"${globals.cgParHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgParFCol" type="color"${globals.cgParFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Чат
            </td><td>
            <input class="cs-set" id="cgChatCol" type="color"${globals.cgChatCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgChatX" type="number"${globals.cgChatX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgChatY" type="number"${globals.cgChatY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgChatWid" type="number"${globals.cgChatWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgChatHei" type="number"${globals.cgChatHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgChatFCol" type="color"${globals.cgChatFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Действия
            </td><td>
            <input class="cs-set" id="cgDeysCol" type="color"${globals.cgDeysCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgDeysX" type="number"${globals.cgDeysX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgDeysY" type="number"${globals.cgDeysY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgDeysWid" type="number"${globals.cgDeysWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgDeysHei" type="number"${globals.cgDeysHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgDeysFCol" type="color"${globals.cgDeysFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              РС
            </td><td>
            <input class="cs-set" id="cgRSCol" type="color"${globals.cgRSCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgRSX" type="number"${globals.cgRSX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRSY" type="number"${globals.cgRSY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRSWid" type="number"${globals.cgRSWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRSHei" type="number"${globals.cgRSHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRSFCol" type="color"${globals.cgRSFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Во рту
            </td>
            <td>
            <input class="cs-set" id="cgRotCol" type="color"${globals.cgRotCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgRotX" type="number"${globals.cgRotX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRotY" type="number"${globals.cgRotY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRotWid" type="number"${globals.cgRotWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRotHei" type="number"${globals.cgRotHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgRotFCol" type="color"${globals.cgRotFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Душевые
            </td>
            <td>
            <input class="cs-set" id="cgOCLCol" type="color"${globals.cgOCLCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgOCLX" type="number"${globals.cgOCLX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgOCLY" type="number"${globals.cgOCLY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgOCLWid" type="number"${globals.cgOCLWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgOCLHei" type="number"${globals.cgOCLHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgOCLFCol" type="color"${globals.cgOCLFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Мой кот | Чат
            </td>
            <td>
            <input class="cs-set" id="cgSmallCol" type="color"${globals.cgSmallCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgSmallX" type="number"${globals.cgSmallX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSmallY" type="number"${globals.cgSmallY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSmallWid" type="number"${globals.cgSmallWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSmallHei" type="number"${globals.cgSmallHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSmallFCol" type="color"${globals.cgSmallFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Тёмные баллы
            </td>
            <td>
            <input class="cs-set" id="cgTBCol" type="color"${globals.cgTBCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgTBX" type="number"${globals.cgTBX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTBY" type="number"${globals.cgTBY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTBWid" type="number"${globals.cgTBWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTBHei" type="number"${globals.cgTBHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTBFCol" type="color"${globals.cgTBFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Часы
            </td>
            <td>
            <input class="cs-set" id="cgClockCol" type="color"${globals.cgClockCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgClockX" type="number"${globals.cgClockX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgClockY" type="number"${globals.cgClockY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgClockWid" type="number"${globals.cgClockWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgClockHei" type="number"${globals.cgClockHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgClockFCol" type="color"${globals.cgClockFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Локация
            </td>
            <td>
            <input class="cs-set" id="cgLocCol" type="color"${globals.cgLocCol?' checked':''} style="width: 35px;">
            </td><td>
            <input class="cs-set" id="cgLocX" type="number"${globals.cgLocX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgLocY" type="number"${globals.cgLocY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgLocWid" type="number"${globals.cgLocWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgLocHei" type="number"${globals.cgLocHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgLocFCol" type="color"${globals.cgLocFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              ТОС и котовремя
            </td>
            <td>
            <input class="cs-set" id="cgTOSCol" type="color"${globals.cgTOSCol?' checked':''} style="width: 35px;">
            </td>
            <td>
            <input class="cs-set" id="cgTOSX" type="number"${globals.cgTOSX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTOSY" type="number"${globals.cgTOSY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTOSWid" type="number"${globals.cgTOSWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTOSHei" type="number"${globals.cgTOSHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgTOSFCol" type="color"${globals.cgTOSFCol?' checked':''} style="width: 35px;">
            </td>
          </tr>
          <tr>
            <td>
              Небо
            </td>
            <td>
            <input class="cs-set" id="cgSkyCol" type="color"${globals.cgSkyCol?' checked':''} style="width: 35px;" disabled>
            </td><td>
            <input class="cs-set" id="cgSkyX" type="number"${globals.cgSkyX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSkyY" type="number"${globals.cgSkyY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSkyWid" type="number"${globals.cgSkyWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSkyHei" type="number"${globals.cgSkyHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
            </td><td>
            <input class="cs-set" id="cgSkyFCol" type="color"${globals.cgSkyFCol?' checked':''} style="width: 35px;" disabled>
            </td>
          </tr>
          </table>
        </div>
<div id="folder2" class="folder">
  <label>Вся страница ➡</label>
  <input class="cs-set" id="cgBodyCol" type="color"${globals.cgBodyCol?' checked':''} style="width: 35px;">
  <br>
  <label>Размер шрифта ➡</label>
  <input class="cs-set" id="cgFontSize" type="number"${globals.cgFontSize?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
  <br>
  <label>Шрифт у "Мой кот" ➡</label>
  <input class="cs-set" id="cgSmallFW" type="number"${globals.cgSmallFW?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
  <br>
  <label>Плюсик параметров ➡</label>
  <input class="cs-set" id="cgParAlertX" type="number"${globals.cgParAlertX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
  <br>
  <label>➡</label>
  <input class="cs-set" id="cgParAlertY" type="number"${globals.cgParAlertY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
  <br>
  <label>Цвет плюсика ➡</label>
  <input class="cs-set" id="cgParAlertFCol" type="color"${globals.cgParAlertFCol?' checked':''} style="width: 35px;">
  <br>
  <label>Обводка блоков ➡</label>
  <input class="cs-set" id="cgBorders" type="checkbox"${globals.cgBorders?' checked':''}>
  <br>
  <label>Ширина ➡</label>
  <input class="cs-set" id="cgBorderWid" type="number"${globals.cgBorderWid?' checked':''} style="width: 45px;" step="0.5" max="15" min="0">
  <br>
  <label>Цвет ➡</label>
  <input class="cs-set" id="cgBorderCol" type="color"${globals.cgBorderCol?' checked':''} style="width: 35px;">
  <br>
  <label>Тип ➡</label>
  <input class="cs-set" id="cgBorderType" type="text"${globals.cgBorderType?' checked':''} style="width: 45px;" step="0.5" max="15" min="0">
  <br>
  <label>Обводка у ТБ ➡</label>
  <input class="cs-set" id="cgTbBorder" type="checkbox"${globals.cgTbBorder?' checked':''}>
  <br>
  <label>Фон упом. ➡</label>
  <input class="cs-set" id="cgYouBG" type="color"${globals.cgYouBG?' checked':''} style="width: 35px;">
  <br>
  <label>Текст упом. ➡</label>
  <input class="cs-set" id="cgYouFC" type="color"${globals.cgYouFC?' checked':''} style="width: 35px;">
  <br>
  <label>Цвет input'ов ➡</label>
  <input class="cs-set" id="cgInputCol" type="color"${globals.cgInputCol?' checked':''} style="width: 35px;">
  <br>
  <label>Текст input'ов ➡</label>
  <input class="cs-set" id="cgInputFCol" type="color"${globals.cgInputFCol?' checked':''} style="width: 35px;">
  <br>
  <label>Скруглённый радиус ➡</label>
  <input class="cs-set" id="cgBorderRad" type="number"${globals.cgBorderRad?' checked':''} style="width: 45px;" step="0.5" max="150" min="0">
  <br>
  <label>Перетаскивать поле? ➡</label>
  <input class="cs-set" id="cgIsFieldFix" type="checkbox"${globals.cgIsFieldFix?' checked':''}>
  <br>
  <label>Скруглять все блоки ➡</label>
  <input class="cs-set" id="cgIsBorderRad" type="checkbox"${globals.cgIsBorderRad?' checked':''}>
  <br>
  <label>Скруглять локацию ➡</label>
  <input class="cs-set" id="cgIsLocBorderRad" type="checkbox"${globals.cgIsLocBorderRad?' checked':''}>
  <br>
  <label>Скруглять ТБ ➡</label>
  <input class="cs-set" id="cgIsTBBorderRad" type="checkbox"${globals.cgIsTBBorderRad?' checked':''}>
  <br>
  <label>Поменять скроллы ➡</label>
  <input class="cs-set" id="cgDeleteScrolls" type="checkbox"${globals.cgDeleteScrolls?' checked':''}>
  <br>
  <label>Кружочек ползунка чата ➡</label>
  <input class="cs-set" id="cgChatSliderCol" type="color"${globals.cgChatSliderCol?' checked':''} style="width: 35px;">
  <br>
  <label>Бордер кружочка ➡</label>
  <input class="cs-set" id="cgChatSliderBorderCol" type="color"${globals.cgChatSliderBorderCol?' checked':''} style="width: 35px;">
  <br>
  <label>Полоска ползунка чата ➡</label>
  <input class="cs-set" id="cgChatSliderLineCol" type="color"${globals.cgChatSliderLineCol?' checked':''} style="width: 35px;">
  <br>
  <label>Бордер полоски ➡</label>
  <input class="cs-set" id="cgChatSliderLineBorder" type="color"${globals.cgChatSliderLineBorder?' checked':''} style="width: 35px;">
  <br>
</div>
        <div id="folder3" class="folder">
        <input class="cs-set" id="cgDelParH2" type="checkbox"${globals.cgDelParH2?' checked':''}><label for="cgDelParH2">Убрать h2 у параметров</label><br>
        <input class="cs-set" id="cgDelHisH2" type="checkbox"${globals.cgDelHisH2?' checked':''}><label for="cgDelHisH2">Убрать h2 у истории</label><br>
        <input class="cs-set" id="cgDelRSH2" type="checkbox"${globals.cgDelRSH2?' checked':''}><label for="cgDelRSH2">Убрать h2 у РС</label><br>
        <input class="cs-set" id="cgInfoH2DelMargins" type="checkbox"${globals.cgInfoH2DelMargins?' checked':''}><label for="cgInfoH2DelMargins">Убрать отступы сверху/снизу у h2 блоков информации</label><br>
        <input class="cs-set" id="cgInfoH2FontSize" type="number"${globals.cgInfoH2FontSize?' checked':''} style="width: 45px;" step="1" max="150" min="0"><label for="cgInfoH2FontSize">Размер шрифта заголовков</label><br>
        <input class="cs-set" id="cgSeparateLocation" type="checkbox"${globals.cgSeparateLocation?' checked':''}><label for="cgSeparateLocation">Отоброжать блок с локацией отдельно</label><br>
        <label for="inputImport">Импорт настроек </label><input type="text" id="inputImport"><br>
        <button id="inputExport">Экспорт настроек</button>
        <input id="outputExport">
        </div>
          </div>
    </div>`
    $(document).ready(function(){$('body').append(html);});
$(document).ready(function() {
    $('#cgHisCol').val(globals.cgHisCol);
    $('#cgHisFCol').val(globals.cgHisFCol);
    $('#cgHisX').val(globals.cgHisX);
    $('#cgHisY').val(globals.cgHisY);
    $('#cgHisWid').val(globals.cgHisWid);
    $('#cgHisHei').val(globals.cgHisHei);
    $('#cgParCol').val(globals.cgParCol);
    $('#cgParFCol').val(globals.cgParFCol);
    $('#cgParX').val(globals.cgParX);
    $('#cgParY').val(globals.cgParY);
    $('#cgParWid').val(globals.cgParWid);
    $('#cgParHei').val(globals.cgParHei);
    $('#cgChatCol').val(globals.cgChatCol);
    $('#cgChatFCol').val(globals.cgChatFCol);
    $('#cgChatX').val(globals.cgChatX);
    $('#cgChatY').val(globals.cgChatY);
    $('#cgChatWid').val(globals.cgChatWid);
    $('#cgChatHei').val(globals.cgChatHei);
  
    $('#cgTOSCol').val(globals.cgTOSCol);
    $('#cgTOSFCol').val(globals.cgTOSFCol);
    $('#cgTOSX').val(globals.cgTOSX);
    $('#cgTOSY').val(globals.cgTOSY);
    $('#cgTOSWid').val(globals.cgTOSWid);
    $('#cgTOSHei').val(globals.cgTOSHei);
  
    $('#cgSkyCol').val(globals.cgSkyCol);
    $('#cgSkyFCol').val(globals.cgSkyFCol);
    $('#cgSkyX').val(globals.cgSkyX);
    $('#cgSkyY').val(globals.cgSkyY);
    $('#cgSkyWid').val(globals.cgSkyWid);
    $('#cgSkyHei').val(globals.cgSkyHei);
  
    $('#cgDeysCol').val(globals.cgDeysCol);
    $('#cgDeysFCol').val(globals.cgDeysFCol);
    $('#cgDeysX').val(globals.cgDeysX);
    $('#cgDeysY').val(globals.cgDeysY);
    $('#cgDeysWid').val(globals.cgDeysWid);
    $('#cgDeysHei').val(globals.cgDeysHei);
    $('#cgRSCol').val(globals.cgRSCol);
    $('#cgRSFCol').val(globals.cgRSFCol);
    $('#cgRSX').val(globals.cgRSX);
    $('#cgRSY').val(globals.cgRSY);
    $('#cgRSWid').val(globals.cgRSWid);
    $('#cgRSHei').val(globals.cgRSHei);
    $('#cgRotCol').val(globals.cgRotCol);
    $('#cgRotFCol').val(globals.cgRotFCol);
    $('#cgRotX').val(globals.cgRotX);
    $('#cgRotY').val(globals.cgRotY);
    $('#cgRotWid').val(globals.cgRotWid);
    $('#cgRotHei').val(globals.cgRotHei);
    $('#cgOCLCol').val(globals.cgOCLCol);
    $('#cgOCLFCol').val(globals.cgOCLFCol);
    $('#cgOCLX').val(globals.cgOCLX);
    $('#cgOCLY').val(globals.cgOCLY);
    $('#cgOCLWid').val(globals.cgOCLWid);
    $('#cgOCLHei').val(globals.cgOCLHei);
    $('#cgTBCol').val(globals.cgTBCol);
    $('#cgTBFCol').val(globals.cgTBFCol);
    $('#cgTBX').val(globals.cgTBX);
    $('#cgTBY').val(globals.cgTBY);
    $('#cgTBWid').val(globals.cgTBWid);
    $('#cgTBHei').val(globals.cgTBHei);
    $('#cgClockCol').val(globals.cgClockCol);
    $('#cgClockFCol').val(globals.cgClockFCol);
    $('#cgClockX').val(globals.cgClockX);
    $('#cgClockY').val(globals.cgClockY);
    $('#cgClockWid').val(globals.cgClockWid);
    $('#cgClockHei').val(globals.cgClockHei);
    $('#cgLocCol').val(globals.cgLocCol);
    $('#cgLocFCol').val(globals.cgLocFCol);
    $('#cgLocX').val(globals.cgLocX);
    $('#cgLocY').val(globals.cgLocY);
    $('#cgLocWid').val(globals.cgLocWid);
    $('#cgLocHei').val(globals.cgLocHei);
    $('#cgSmallCol').val(globals.cgSmallCol);
    $('#cgSmallFCol').val(globals.cgSmallFCol);
    $('#cgSmallX').val(globals.cgSmallX);
    $('#cgSmallY').val(globals.cgSmallY);
    $('#cgSmallWid').val(globals.cgSmallWid);
    $('#cgSmallHei').val(globals.cgSmallHei);
    $('#cgBodyCol').val(globals.cgBodyCol);
    $('#cgFontSize').val(globals.cgFontSize);
    $('#cgBorderWid').val(globals.cgBorderWid);
    $('#cgBorderType').val(globals.cgBorderType);
    $('#cgBorderCol').val(globals.cgBorderCol);
    $('#cgSmallFW').val(globals.cgSmallFW);
    $('#cgYouBG').val(globals.cgYouBG);
    $('#cgYouFC').val(globals.cgYouFC);
    $('#cgInputCol').val(globals.cgInputCol);
    $('#cgInputFCol').val(globals.cgInputFCol);
    $('#cgBorderRad').val(globals.cgBorderRad);
    $('#cgParAlertX').val(globals.cgParAlertX);
    $('#cgParAlertY').val(globals.cgParAlertY);
    $('#cgParAlertFCol').val(globals.cgParAlertFCol);
    $('#cgChatSliderCol').val(globals.cgChatSliderCol);
    $('#cgChatSliderBorderCol').val(globals.cgChatSliderBorderCol);
    $('#cgInfoH2FontSize').val(globals.cgInfoH2FontSize);
    $('#cgChatSliderLineCol').val(globals.cgChatSliderLineCol);
    $('#cgChatSliderLineBorder').val(globals.cgChatSliderLineBorder);
    });
  
  
  
  
 let css = `<style>
    div#compactTool table tr td {
      border: 1px solid black;
      height: 22px;
      width: 66px;
          text-align: center;
    }
      div#compactTool table tr td input[type="number"] {
      width: 66px !important;
      height: 20px;
      margin-top: 1px;
      margin-bottom: 1px;
    }
  
    div#ctHeader {
      background-color: #ffffff;
      height: 25px;
      text-align: center;
      line-height: 25px;
    }
  
    body {
    background-color: ${globals.cgBodyCol};
      font-size: ${globals.cgFontSize}px !important;
    }
    div#compactTool {
      position: absolute;
      top: ${globals.ctTecPosY}px;
      left: ${globals.ctTecPosX}px;
      width: 570px;
      height: auto;
      font-size: 14px !important;
      background-color: rgba(255, 255, 255, .5);
      font-family: montserrat;
    }
    #mainTable {
  
    }
    .folder {
      display: none;
    }
    .folder.active {
      display: block;
    }
    #svg1 {
      position: absolute;
      left: 18px;
    }
    body {
        font-size: 14px;
        font-family: Verdana
      }
      
      a {
        outline: none;
        color: #000;
        text-decoration: underline
      }
      
      a:hover {
        text-decoration: none;
        color: #06f
      }
      

      
      table {
        border-collapse: collapse
      }
      
      td {
        vertical-align: top
      }
      
      .d,
      .e,
      .f,
      .d div,
      .e div,
      .f div {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        padding: 0;
        margin: 0;
        position: relative
      }
      
      .e,
      .e div {
        width: 32px;
        height: 32px
      }
      
      .f,
      .f div {
        width: 70px;
        height: 70px
      }
      
      #error {
        cursor: pointer;
        display: none;
        width: 170px;
        min-height: 50px;
        border-radius: 10px;
        padding: 5px;
        font-weight: 700;
        background-color: RGBA(241, 90, 90, .9);
        color: #000;
        position: fixed;
        top: 50%;
        left: .5%;
        z-index: 9999
      }
      
      .ui-helper-hidden-accessible {
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px)
      }
      
      .ui-helper-reset {
        border: 0;
        outline: 0;
        line-height: 1.3;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
        margin: 0;
        padding: 0
      }
      
      .ui-helper-clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden
      }
      
      .ui-helper-clearfix {
        display: block
      }
      
      * html .ui-helper-clearfix {
        height: 1%
      }
      
      .ui-helper-zfix {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        opacity: 0;
        filter: Alpha(Opacity=0)
      }
      
      .ui-state-disabled {
        cursor: default !important
      }
      
      .ui-icon {
        display: block;
        text-indent: -99999px;
        overflow: hidden;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-image: url(/ui-icons_d19405_256x240.png)
      }
      
      .ui-widget-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #5c5c5c url(/cw3/images/ui-bg_flat_50_5c5c5c_40x100.png) 50% 50% repeat-x;
        opacity: .8;
        filter: Alpha(Opacity=80)
      }
      
      .ui-widget {
        font-family: Segoe UI, Arial, sans-serif;
        font-size: 1.1em
      }
      
      .ui-widget .ui-widget {
        font-size: 1em
      }
      
      .ui-widget input,
      .ui-widget select,
      .ui-widget textarea,
      .ui-widget button {
        font-family: Segoe UI, Arial, sans-serif;
        font-size: 1em
      }
      
      .ui-widget-content {
        border: 1px solid #8e846b;
        background: #feeebd url(/cw3/images/ui-bg_highlight-soft_100_feeebd_1x100.png) 50% top repeat-x;
        color: #383838
      }
      
      .ui-widget-content a {
        color: #383838
      }
      
      .ui-widget-header {
        border: 1px solid #494437;
        background: #817865 url(/cw3/images/ui-bg_gloss-wave_45_817865_500x100.png) 50% 50% repeat-x;
        color: #fff;
        font-weight: 700
      }
      
      .ui-state-default,
      .ui-widget-content .ui-state-default,
      .ui-widget-header .ui-state-default {
        border: 1px solid #d19405;
        background: #fece2f url(/cw3/images/ui-bg_gloss-wave_60_fece2f_500x100.png) 50% 50% repeat-x;
        font-weight: 700;
        color: #4c3000
      }
      
      .ui-state-default a,
      .ui-state-default a:link,
      .ui-state-default a:visited {
        color: #4c3000;
        text-decoration: none
      }
      
      .ui-state-hover,
      .ui-widget-content .ui-state-hover,
      .ui-widget-header .ui-state-hover,
      .ui-state-focus,
      .ui-widget-content .ui-state-focus,
      .ui-widget-header .ui-state-focus {
        border: 1px solid #a45b13;
        background: #ffdd57 url(/cw3/images/ui-bg_gloss-wave_70_ffdd57_500x100.png) 50% 50% repeat-x;
        font-weight: 700;
        color: #381f00
      }
      
      .ui-state-hover a,
      .ui-state-hover a:hover {
        color: #381f00;
        text-decoration: none
      }
      
      .ui-state-active,
      .ui-widget-content .ui-state-active,
      .ui-widget-header .ui-state-active {
        border: 1px solid #655e4e;
        background: #fff url(/cw3/images/ui-bg_inset-soft_30_ffffff_1x100.png) 50% 50% repeat-x;
        font-weight: 700;
        color: #0074c7
      }
      
      .ui-state-active a,
      .ui-state-active a:link,
      .ui-state-active a:visited {
        color: #0074c7;
        text-decoration: none
      }
      
      .ui-widget:active {
        outline: none
      }
      
      .ui-state-highlight,
      .ui-widget-content .ui-state-highlight,
      .ui-widget-header .ui-state-highlight {
        border: 1px solid #eeb420;
        background: #fff9e5 url(/cw3/images/ui-bg_gloss-wave_90_fff9e5_500x100.png) 50% top repeat-x;
        color: #1f1f1f
      }
      
      .ui-state-highlight a,
      .ui-widget-content .ui-state-highlight a,
      .ui-widget-header .ui-state-highlight a {
        color: #1f1f1f
      }
      
      .ui-state-error,
      .ui-widget-content .ui-state-error,
      .ui-widget-header .ui-state-error {
        border: 1px solid #ffb73d;
        background: #d34d17 url(/cw3/images/ui-bg_diagonals-medium_20_d34d17_40x40.png) 50% 50% repeat;
        color: #fff
      }
      
      .ui-priority-primary,
      .ui-widget-content .ui-priority-primary,
      .ui-widget-header .ui-priority-primary {
        font-weight: 700
      }
      
      .ui-priority-secondary,
      .ui-widget-content .ui-priority-secondary,
      .ui-widget-header .ui-priority-secondary {
        opacity: .7;
        filter: Alpha(Opacity=70);
        font-weight: 400
      }
      
      .ui-state-disabled,
      .ui-widget-content .ui-state-disabled,
      .ui-widget-header .ui-state-disabled {
        opacity: .35;
        filter: Alpha(Opacity=35);
        background-image: none
      }
      
      .ui-widget-content .ui-icon {
        background-image: url(/ui-icons_d19405_256x240.png)
      }
      
      .ui-widget-header .ui-icon {
        background-image: url(/cw3/images/ui-icons_fadc7a_256x240.png)
      }
      
      .ui-state-default .ui-icon {
        background-image: url(/cw3/images/ui-icons_3d3d3d_256x240.png)
      }
      
      .ui-state-hover .ui-icon,
      .ui-state-focus .ui-icon {
        background-image: url(/cw3/images/ui-icons_bd7b00_256x240.png)
      }
      
      .ui-state-active .ui-icon {
        background-image: url(/cw3/images/ui-icons_eb990f_256x240.png)
      }
      
      .ui-state-highlight .ui-icon {
        background-image: url(/cw3/images/ui-icons_ed9f26_256x240.png)
      }
      
      .ui-state-error .ui-icon,
      .ui-state-error-text .ui-icon {
        background-image: url(/cw3/images/ui-icons_ffe180_256x240.png)
      }
      
      .ui-icon-carat-1-n {
        background-position: 0 0
      }
      
      .ui-icon-carat-1-ne {
        background-position: -16px 0
      }
      
      .ui-icon-carat-1-e {
        background-position: -32px 0
      }
      
      .ui-icon-carat-1-se {
        background-position: -48px 0
      }
      
      .ui-icon-carat-1-s {
        background-position: -64px 0
      }
      
      .ui-icon-carat-1-sw {
        background-position: -80px 0
      }
      
      .ui-icon-carat-1-w {
        background-position: -96px 0
      }
      
      .ui-icon-carat-1-nw {
        background-position: -112px 0
      }
      
      .ui-icon-carat-2-n-s {
        background-position: -128px 0
      }
      
      .ui-icon-carat-2-e-w {
        background-position: -144px 0
      }
      
      .ui-icon-triangle-1-n {
        background-position: 0 -16px
      }
      
      .ui-icon-triangle-1-ne {
        background-position: -16px -16px
      }
      
      .ui-icon-triangle-1-e {
        background-position: -32px -16px
      }
      
      .ui-icon-triangle-1-se {
        background-position: -48px -16px
      }
      
      .ui-icon-triangle-1-s {
        background-position: -64px -16px
      }
      
      .ui-icon-triangle-1-sw {
        background-position: -80px -16px
      }
      
      .ui-icon-triangle-1-w {
        background-position: -96px -16px
      }
      
      .ui-icon-triangle-1-nw {
        background-position: -112px -16px
      }
      
      .ui-icon-triangle-2-n-s {
        background-position: -128px -16px
      }
      
      .ui-icon-triangle-2-e-w {
        background-position: -144px -16px
      }
      
      .ui-icon-arrow-1-n {
        background-position: 0 -32px
      }
      
      .ui-icon-arrow-1-ne {
        background-position: -16px -32px
      }
      
      .ui-icon-arrow-1-e {
        background-position: -32px -32px
      }
      
      .ui-icon-arrow-1-se {
        background-position: -48px -32px
      }
      
      .ui-icon-arrow-1-s {
        background-position: -64px -32px
      }
      
      .ui-icon-arrow-1-sw {
        background-position: -80px -32px
      }
      
      .ui-icon-arrow-1-w {
        background-position: -96px -32px
      }
      
      .ui-icon-arrow-1-nw {
        background-position: -112px -32px
      }
      
      .ui-icon-arrow-2-n-s {
        background-position: -128px -32px
      }
      
      .ui-icon-arrow-2-ne-sw {
        background-position: -144px -32px
      }
      
      .ui-icon-arrow-2-e-w {
        background-position: -160px -32px
      }
      
      .ui-icon-arrow-2-se-nw {
        background-position: -176px -32px
      }
      
      .ui-icon-arrowstop-1-n {
        background-position: -192px -32px
      }
      
      .ui-icon-arrowstop-1-e {
        background-position: -208px -32px
      }
      
      .ui-icon-arrowstop-1-s {
        background-position: -224px -32px
      }
      
      .ui-icon-arrowstop-1-w {
        background-position: -240px -32px
      }
      
      .ui-icon-arrowthick-1-n {
        background-position: 0 -48px
      }
      
      .ui-icon-arrowthick-1-ne {
        background-position: -16px -48px
      }
      
      .ui-icon-arrowthick-1-e {
        background-position: -32px -48px
      }
      
      .ui-icon-arrowthick-1-se {
        background-position: -48px -48px
      }
      
      .ui-icon-arrowthick-1-s {
        background-position: -64px -48px
      }
      
      .ui-icon-arrowthick-1-sw {
        background-position: -80px -48px
      }
      
      .ui-icon-arrowthick-1-w {
        background-position: -96px -48px
      }
      
      .ui-icon-arrowthick-1-nw {
        background-position: -112px -48px
      }
      
      .ui-icon-arrowthick-2-n-s {
        background-position: -128px -48px
      }
      
      .ui-icon-arrowthick-2-ne-sw {
        background-position: -144px -48px
      }
      
      .ui-icon-arrowthick-2-e-w {
        background-position: -160px -48px
      }
      
      .ui-icon-arrowthick-2-se-nw {
        background-position: -176px -48px
      }
      
      .ui-icon-arrowthickstop-1-n {
        background-position: -192px -48px
      }
      
      .ui-icon-arrowthickstop-1-e {
        background-position: -208px -48px
      }
      
      .ui-icon-arrowthickstop-1-s {
        background-position: -224px -48px
      }
      
      .ui-icon-arrowthickstop-1-w {
        background-position: -240px -48px
      }
      
      .ui-icon-arrowreturnthick-1-w {
        background-position: 0 -64px
      }
      
      .ui-icon-arrowreturnthick-1-n {
        background-position: -16px -64px
      }
      
      .ui-icon-arrowreturnthick-1-e {
        background-position: -32px -64px
      }
      
      .ui-icon-arrowreturnthick-1-s {
        background-position: -48px -64px
      }
      
      .ui-icon-arrowreturn-1-w {
        background-position: -64px -64px
      }
      
      .ui-icon-arrowreturn-1-n {
        background-position: -80px -64px
      }
      
      .ui-icon-arrowreturn-1-e {
        background-position: -96px -64px
      }
      
      .ui-icon-arrowreturn-1-s {
        background-position: -112px -64px
      }
      
      .ui-icon-arrowrefresh-1-w {
        background-position: -128px -64px
      }
      
      .ui-icon-arrowrefresh-1-n {
        background-position: -144px -64px
      }
      
      .ui-icon-arrowrefresh-1-e {
        background-position: -160px -64px
      }
      
      .ui-icon-arrowrefresh-1-s {
        background-position: -176px -64px
      }
      
      .ui-icon-arrow-4 {
        background-position: 0 -80px
      }
      
      .ui-icon-arrow-4-diag {
        background-position: -16px -80px
      }
      
      .ui-icon-extlink {
        background-position: -32px -80px
      }
      
      .ui-icon-newwin {
        background-position: -48px -80px
      }
      
      .ui-icon-refresh {
        background-position: -64px -80px
      }
      
      .ui-icon-shuffle {
        background-position: -80px -80px
      }
      
      .ui-icon-transfer-e-w {
        background-position: -96px -80px
      }
      
      .ui-icon-transferthick-e-w {
        background-position: -112px -80px
      }
      
      .ui-icon-folder-collapsed {
        background-position: 0 -96px
      }
      
      .ui-icon-folder-open {
        background-position: -16px -96px
      }
      
      .ui-icon-document {
        background-position: -32px -96px
      }
      
      .ui-icon-document-b {
        background-position: -48px -96px
      }
      
      .ui-icon-note {
        background-position: -64px -96px
      }
      
      .ui-icon-mail-closed {
        background-position: -80px -96px
      }
      
      .ui-icon-mail-open {
        background-position: -96px -96px
      }
      
      .ui-icon-suitcase {
        background-position: -112px -96px
      }
      
      .ui-icon-comment {
        background-position: -128px -96px
      }
      
      .ui-icon-person {
        background-position: -144px -96px
      }
      
      .ui-icon-print {
        background-position: -160px -96px
      }
      
      .ui-icon-trash {
        background-position: -176px -96px
      }
      
      .ui-icon-locked {
        background-position: -192px -96px
      }
      
      .ui-icon-unlocked {
        background-position: -208px -96px
      }
      
      .ui-icon-bookmark {
        background-position: -224px -96px
      }
      
      .ui-icon-tag {
        background-position: -240px -96px
      }
      
      .ui-icon-home {
        background-position: 0 -112px
      }
      
      .ui-icon-flag {
        background-position: -16px -112px
      }
      
      .ui-icon-calendar {
        background-position: -32px -112px
      }
      
      .ui-icon-cart {
        background-position: -48px -112px
      }
      
      .ui-icon-pencil {
        background-position: -64px -112px
      }
      
      .ui-icon-clock {
        background-position: -80px -112px
      }
      
      .ui-icon-disk {
        background-position: -96px -112px
      }
      
      .ui-icon-calculator {
        background-position: -112px -112px
      }
      
      .ui-icon-zoomin {
        background-position: -128px -112px
      }
      
      .ui-icon-zoomout {
        background-position: -144px -112px
      }
      
      .ui-icon-search {
        background-position: -160px -112px
      }
      
      .ui-icon-wrench {
        background-position: -176px -112px
      }
      
      .ui-icon-gear {
        background-position: -192px -112px
      }
      
      .ui-icon-heart {
        background-position: -208px -112px
      }
      
      .ui-icon-star {
        background-position: -224px -112px
      }
      
      .ui-icon-link {
        background-position: -240px -112px
      }
      
      .ui-icon-cancel {
        background-position: 0 -128px
      }
      
      .ui-icon-plus {
        background-position: -16px -128px
      }
      
      .ui-icon-plusthick {
        background-position: -32px -128px
      }
      
      .ui-icon-minus {
        background-position: -48px -128px
      }
      
      .ui-icon-minusthick {
        background-position: -64px -128px
      }
      
      .ui-icon-close {
        background-position: -80px -128px
      }
      
      .ui-icon-closethick {
        background-position: -96px -128px
      }
      
      .ui-icon-key {
        background-position: -112px -128px
      }
      
      .ui-icon-lightbulb {
        background-position: -128px -128px
      }
      
      .ui-icon-scissors {
        background-position: -144px -128px
      }
      
      .ui-icon-clipboard {
        background-position: -160px -128px
      }
      
      .ui-icon-copy {
        background-position: -176px -128px
      }
      
      .ui-icon-contact {
        background-position: -192px -128px
      }
      
      .ui-icon-image {
        background-position: -208px -128px
      }
      
      .ui-icon-video {
        background-position: -224px -128px
      }
      
      .ui-icon-script {
        background-position: -240px -128px
      }
      
      .ui-icon-alert {
        background-position: 0 -144px
      }
      
      .ui-icon-info {
        background-position: -16px -144px
      }
      
      .ui-icon-notice {
        background-position: -32px -144px
      }
      
      .ui-icon-help {
        background-position: -48px -144px
      }
      
      .ui-icon-check {
        background-position: -64px -144px
      }
      
      .ui-icon-bullet {
        background-position: -80px -144px
      }
      
      .ui-icon-radio-off {
        background-position: -96px -144px
      }
      
      .ui-icon-radio-on {
        background-position: -112px -144px
      }
      
      .ui-icon-pin-w {
        background-position: -128px -144px
      }
      
      .ui-icon-pin-s {
        background-position: -144px -144px
      }
      
      .ui-icon-play {
        background-position: 0 -160px
      }
      
      .ui-icon-pause {
        background-position: -16px -160px
      }
      
      .ui-icon-seek-next {
        background-position: -32px -160px
      }
      
      .ui-icon-seek-prev {
        background-position: -48px -160px
      }
      
      .ui-icon-seek-end {
        background-position: -64px -160px
      }
      
      .ui-icon-stop {
        background-position: -96px -160px
      }
      
      .ui-icon-eject {
        background-position: -112px -160px
      }
      
      .ui-icon-volume-off {
        background-position: -128px -160px
      }
      
      .ui-icon-volume-on {
        background-position: -144px -160px
      }
      
      .ui-icon-power {
        background-position: 0 -176px
      }
      
      .ui-icon-signal-diag {
        background-position: -16px -176px
      }
      
      .ui-icon-signal {
        background-position: -32px -176px
      }
      
      .ui-icon-battery-0 {
        background-position: -48px -176px
      }
      
      .ui-icon-battery-1 {
        background-position: -64px -176px
      }
      
      .ui-icon-battery-2 {
        background-position: -80px -176px
      }
      
      .ui-icon-battery-3 {
        background-position: -96px -176px
      }
      
      .ui-icon-circle-plus {
        background-position: 0 -192px
      }
      
      .ui-icon-circle-minus {
        background-position: -16px -192px
      }
      
      .ui-icon-circle-close {
        background-position: -32px -192px
      }
      
      .ui-icon-circle-triangle-e {
        background-position: -48px -192px
      }
      
      .ui-icon-circle-triangle-s {
        background-position: -64px -192px
      }
      
      .ui-icon-circle-triangle-w {
        background-position: -80px -192px
      }
      
      .ui-icon-circle-triangle-n {
        background-position: -96px -192px
      }
      
      .ui-icon-circle-arrow-e {
        background-position: -112px -192px
      }
      
      .ui-icon-circle-arrow-s {
        background-position: -128px -192px
      }
      
      .ui-icon-circle-arrow-w {
        background-position: -144px -192px
      }
      
      .ui-icon-circle-arrow-n {
        background-position: -160px -192px
      }
      
      .ui-icon-circle-zoomin {
        background-position: -176px -192px
      }
      
      .ui-icon-circle-zoomout {
        background-position: -192px -192px
      }
      
      .ui-icon-circle-check {
        background-position: -208px -192px
      }
      
      .ui-icon-circlesmall-plus {
        background-position: 0 -208px
      }
      
      .ui-icon-circlesmall-minus {
        background-position: -16px -208px
      }
      
      .ui-icon-circlesmall-close {
        background-position: -32px -208px
      }
      
      .ui-icon-squaresmall-plus {
        background-position: -48px -208px
      }
      
      .ui-icon-squaresmall-minus {
        background-position: -64px -208px
      }
      
      .ui-icon-squaresmall-close {
        background-position: -80px -208px
      }
      
      .ui-icon-grip-dotted-vertical {
        background-position: 0 -224px
      }
      
      .ui-icon-grip-dotted-horizontal {
        background-position: -16px -224px
      }
      
      .ui-icon-grip-solid-vertical {
        background-position: -32px -224px
      }
      
      .ui-icon-grip-solid-horizontal {
        background-position: -48px -224px
      }
      
      .ui-icon-gripsmall-diagonal-se {
        background-position: -64px -224px
      }
      
      .ui-icon-grip-diagonal-se {
        background-position: -80px -224px
      }
      
      .ui-corner-all,
      .ui-corner-top,
      .ui-corner-left,
      .ui-corner-tl {
        -moz-border-radius-topleft: 8px;
        -webkit-border-top-left-radius: 8px;
        -khtml-border-top-left-radius: 8px;
        border-top-left-radius: 8px
      }
      
      .ui-corner-all,
      .ui-corner-top,
      .ui-corner-right,
      .ui-corner-tr {
        -moz-border-radius-topright: 8px;
        -webkit-border-top-right-radius: 8px;
        -khtml-border-top-right-radius: 8px;
        border-top-right-radius: 8px
      }
      
      .ui-corner-all,
      .ui-corner-bottom,
      .ui-corner-left,
      .ui-corner-bl {
        -moz-border-radius-bottomleft: 8px;
        -webkit-border-bottom-left-radius: 8px;
        -khtml-border-bottom-left-radius: 8px;
        border-bottom-left-radius: 8px
      }
      
      .ui-corner-all,
      .ui-corner-bottom,
      .ui-corner-right,
      .ui-corner-br {
        -moz-border-radius-bottomright: 8px;
        -webkit-border-bottom-right-radius: 8px;
        -khtml-border-bottom-right-radius: 8px;
        border-bottom-right-radius: 8px
      }
      
      .ui-widget-shadow {
        background: #ccc url(/cw3/images/ui-bg_flat_30_cccccc_40x100.png) 50% 50% repeat-x;
        opacity: .6;
        filter: Alpha(Opacity=60);
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        margin: -7px 0 0 -7px;
        padding: 7px
      }
      
      .ui-slider {
        position: relative;
        text-align: left
      }
      
      .ui-slider .ui-slider-handle {
        position: absolute;
        z-index: 2;
        width: 1.2em;
        height: 1.2em;
        cursor: default
      }
      
      .ui-slider .ui-slider-range {
        position: absolute;
        z-index: 1;
        font-size: .7em;
        display: block;
        border: 0;
        background-position: 0 0
      }
      
      .ui-slider-horizontal {
        height: .8em
      }
      
      .ui-slider-horizontal .ui-slider-handle {
        top: -.3em;
        margin-left: -.6em
      }
      
      .ui-slider-horizontal .ui-slider-range {
        top: 0;
        height: 100%
      }
      
      .ui-slider-horizontal .ui-slider-range-min {
        left: 0
      }
      
      .ui-slider-horizontal .ui-slider-range-max {
        right: 0
      }
      
      .ui-slider-vertical {
        width: .8em;
        height: 100px
      }
      
      .ui-slider-vertical .ui-slider-handle {
        left: -.3em;
        margin-left: 0;
        margin-bottom: -.6em
      }
      
      .ui-slider-vertical .ui-slider-range {
        left: 0;
        width: 100%
      }
      
      .ui-slider-vertical .ui-slider-range-min {
        bottom: 0
      }
      
      .ui-slider-vertical .ui-slider-range-max {
        top: 0
      }
      
      span.tt span,
      .ui-helper-hidden {
        display: none
      }
      
      .ui-widget-header a,
      .ui-state-error a,
      .ui-widget-content .ui-state-error a,
      .ui-widget-header .ui-state-error a,
      .ui-state-error-text,
      .ui-widget-content .ui-state-error-text,
      .ui-widget-header .ui-state-error-text {
        color: #fff
      }
      
      .ui-icon-seek-start,
      .ui-icon-seek-first {
        background-position: -80px -160px
      }
      
      .reveal-modal-bg {
        position: fixed;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .8);
        z-index: 100;
        display: none;
        top: 0;
        left: 0
      }
      
      .reveal-modal {
        width: 400px;
        max-width: 100%;
        padding: 30px 40px 34px;
        box-sizing: border-box;
        visibility: hidden;
        top: 100px;
        left: 0;
        right: 0;
        margin: auto;
        background: #eee url(/cw3/images/modal-gloss.png) no-repeat -200px -80px;
        position: absolute;
        z-index: 101;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .4);
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .4);
        box-shadow: 0 0 10px rgba(0, 0, 0, .4)
      }
      
      .reveal-modal.small {
        width: 200px;
        margin-left: -140px
      }
      
      .reveal-modal.medium {
        width: 400px;
        margin-left: -240px
      }
      
      .reveal-modal.large {
        width: 600px;
        margin-left: -340px
      }
      
      .reveal-modal.xlarge {
        width: 800px;
        margin-left: -440px
      }
      
      .reveal-modal .close-reveal-modal {
        font-size: 22px;
        line-height: .5;
        position: absolute;
        top: 8px;
        right: 11px;
        color: #aaa;
        text-shadow: 0 -1px 1px rbga(0, 0, 0, .6);
        font-weight: 700;
        cursor: pointer
      }
      
      #tiptip_holder {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99999
      }
      
      #tiptip_holder.tip_top {
        padding-bottom: 5px
      }
      
      #tiptip_holder.tip_bottom {
        padding-top: 5px
      }
      
      #tiptip_holder.tip_right {
        padding-left: 5px
      }
      
      #tiptip_holder.tip_left {
        padding-right: 5px
      }
      
      #tiptip_content {
        font-size: 11px;
        color: #fff;
        text-shadow: 0 0 2px #000;
        border: 1px solid rgba(255, 255, 255, .25);
        background-color: rgba(25, 25, 25, .92);
        background-image: 0;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        box-shadow: 0 0 3px #555;
        -webkit-box-shadow: 0 0 3px #555;
        -moz-box-shadow: 0 0 3px #555;
        padding: 4px 8px
      }
      
      #tiptip_arrow,
      #tiptip_arrow_inner {
        position: absolute;
        height: 0;
        width: 0;
        border-color: transparent;
        border-style: solid;
        border-width: 6px
      }
      
      #tiptip_holder.tip_top #tiptip_arrow {
        border-top-color: rgba(255, 255, 255, .35)
      }
      
      #tiptip_holder.tip_bottom #tiptip_arrow {
        border-bottom-color: rgba(255, 255, 255, .35)
      }
      
      #tiptip_holder.tip_right #tiptip_arrow {
        border-right-color: rgba(255, 255, 255, .35)
      }
      
      #tiptip_holder.tip_left #tiptip_arrow {
        border-left-color: rgba(255, 255, 255, .35)
      }
      
      #tiptip_holder.tip_top #tiptip_arrow_inner {
        margin-top: -7px;
        margin-left: -6px;
        border-top-color: rgba(25, 25, 25, .92)
      }
      
      #tiptip_holder.tip_bottom #tiptip_arrow_inner {
        margin-top: -5px;
        margin-left: -6px;
        border-bottom-color: rgba(25, 25, 25, .92)
      }
      
      #tiptip_holder.tip_right #tiptip_arrow_inner {
        margin-top: -6px;
        margin-left: -5px;
        border-right-color: rgba(25, 25, 25, .92)
      }
      
      #tiptip_holder.tip_left #tiptip_arrow_inner {
        margin-top: -6px;
        margin-left: -7px;
        border-left-color: rgba(25, 25, 25, .92)
      }
  
    html, body {
    margin: 0;
    padding: 0; }
  .d[data-v-59afe5e8], .d div[data-v-59afe5e8] {
    background-color: transparent;
    /* background-repeat: no-repeat; */
    border: none;
    padding: 0;
    margin: 0;
    width: 100px;
    height: 150px;
}
  #app {
    width: 1000px;
    margin: auto; }
  
  #newchat, #newls {
    background-color: white;
    font-weight: bold; }
  
  .small {
    font-size: 12px; }
  
  .title {
    display: block;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 8px; }
  
  #main_table {
    border-collapse: separate;
    border: none;
    width: 100%;
    max-width: 1000px;
    border-spacing: 0;
    margin: 0;
    padding: 0;
    margin-top: 7px;
    background: black; }
  
  #main_table > tr, #main_table > tr > td, #main_table > tbody > tr, #main_table > tbody > tr > td {
    margin: 0;
    padding: 0; }
  
  .infos {
    vertical-align: top;
    width: 33%; }
  
  #info_main {
    border: none;
    width: 100%;
    background: #FFDEAD; }
  
  .other_cats_list {
    background: initial;
    border: 1px solid rgba(0, 0, 0, 0.4); }
  
  .other_cats_list > a {
    color: inherit; }
  
  #achievement {
    top: -1000px;
    transition: top 0.5s ease;
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    right: 0;
    max-width: 720px;
    min-width: 320px;
    margin: auto;
    background-color: #ffffee;
    border-radius: 5px;
    padding: 10px 15px 10px;
    z-index: 101;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    background-size: contain; }
    #achievement #achievement_img > img {
      display: block;
      height: 120px;
      width: 120px;
      border-radius: 0.5em; }
    #achievement #achievement_img {
      display: flex;
      padding: 4px 15px 4px 4px;
      align-items: center; }
    #achievement #achievement_container {
      padding: 4px;
      width: 100%; }
    #achievement #close_achievement {
      position: absolute;
      right: 0;
      top: 0;
      padding: 2px 7px;
      color: black;
      font-size: 1.7em;
      cursor: pointer; }
    #achievement #achievement_name {
      font-weight: bold;
      font-size: 1.4em;
      padding-bottom: 2px; }
    #achievement #achievement_top {
      font-weight: bold;
      font-size: 1.2em;
      text-align: center;
      padding: 0 25px 5px 25px; }
    #achievement #achievement_text {
      font-style: italic; }
    #achievement .no-select {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }
  
  #achievement.mobile {
    width: 100%;
    padding: 10px 0 10px;
    border-radius: 0 0 5px 5px; }
    #achievement.mobile #close_achievement {
      font-size: 2.0em; }
    #achievement.mobile #achievement_img {
      padding: 4px; }
  
  #achievement.mobile.show {
    top: 0; }
  
  #achievement.show {
    top: 15px; }
  
  #timer {
    display: none;
    position: fixed;
    z-index: 9999;
    background-color: RGBA(204, 204, 204, 0.5);
    min-width: 50px;
    max-width: 100px;
    height: 20px;
    top: 60px;
    right: 10px;
    border-radius: 10px;
    text-align: center;
    padding: 1px; }
  
  #tr_actions {
    background-color: #FFDEAD; }
  
  #dein {
    display: none; }
  
  #block_mess {
    margin: 8px 0; }
  
  #tr_chat {
    background-color: #C60; }
  
  #chat_form {
    margin: 15px; }
  
  input#text {
    width: 95%;
    max-width: 500px; }
  
  #volume {
    width: 200px;
    display: inline-block;
    margin-left: 5px; }
  
  #chat_msg {
    width: 1000px;
    overflow: auto;
    height: 275px; }
  
  .chat_text {
    display: inline-block;
    word-wrap: break-word; }
  
  .pair-delete, .adopt, .love {
    width: 16px;
    height: 16px; }
  
  #tr_field, #act, #cages {
    padding: 0;
    margin: 0;
    border-spacing: 0; }
  
  #cages_overflow, #cages_div {
    width: 1000px;
    min-height: 1000px; }
  
  #cages_div {
    background-repeat: no-repeat; }
  
  #cages {
    width: 1000px;
    min-height: 1000px;
    background-repeat: no-repeat; }
  
  .cage, .cage_items {
    width: 100px;
    height: 150px;
    border: none;
    margin: 0;
    padding: 0; }
  
  .cage {
    padding-bottom: 16px; }
  
  #cages table td {
    width: 160px;
    height: 32px;
    text-align: left; }
  
  #cages table td div, #cages div[id^=thd] {
    background-color: transparent; }
  
  #cages table td img {
    width: 32px;
    height: 32px;
    text-align: left; }
  
  .move_parent {
    display: block;
    position: relative;
    padding: 0;
    margin: 0; }
  
  .move_img {
    display: block;
    width: 100px;
    height: 150px;
    border: 0;
    margin: 0;
    padding: 0; }
  
  .move_parent .move_name {
    display: block;
    position: absolute;
    font-size: 11px;
    bottom: 43px;
    left: 4px;
    width: 92px;
    text-align: center;
    background-color: RGBA(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 0 3px 1px 3px;
    margin: 0;
    word-break: break-word;
    box-sizing: border-box; }
  
  .move_parent .owned {
    border-color: #C60; }
  
  .move_parent .not_owned {
    border-color: #7e97ec; }
  
  .move_parent .owned, .move_parent .not_owned {
    background-color: #ffffffc9;
    margin: -2px;
    border-width: 2px;
    border-style: solid; }
  
  .cat {
    position: relative; }
  
  .huntEl {
    position: absolute; }
  
  .cat_tooltip {
    display: none; }
  
  .cat:hover .cat_tooltip {
    display: block;
    position: absolute;
    z-index: 9999;
    padding: 10px;
    min-width: 160px;
    background: RGBA(255, 255, 255, 0.9);
    border: 2px solid gray;
    border-radius: 12px;
    color: #930;
    font-weight: bold;
    text-align: center; }
  
  .cat:hover .cat_tooltip a {
    color: #930; }
  
  .mouth {
    width: 100%;
    padding: 0;
    margin: 0; }
    .mouth ol {
      list-style-type: none; }
    .mouth li {
      display: inline-block; }
    .mouth img {
      width: 32px; }
  
  .online {
    color: black; }
  
  .smell_move {
    border: 2px solid white;
    width: 96px;
    height: 96px; }
  
  .arrow-paws {
    background: url("/cw3/symbole/arrow_paws.png") 0 0 no-repeat; }
  
  .arrow-claws {
    background: url("/cw3/symbole/arrow_claws.png") 0 0 no-repeat; }
  
  .arrow-teeth {
    background: url("/arrow_teeth.png") 0 0 no-repeat; }
  
  .arrow {
    height: 8px;
    position: absolute;
    margin: 0;
    padding: 3px 0 0 11px;
    z-index: 2; }
  
  .arrow table, .arrow td {
    height: 5px !important;
    padding: 0;
    margin: 0; }
  
  .arrow_red {
    background: #CD4141; }
  
  .arrow_green {
    background: #41CD70; }
  
  #fightPanel {
    position: fixed;
    z-index: 9999;
    background-color: RGBA(204, 204, 204, 0.9);
    height: 100px;
    top: 20px;
    right: 10px;
    border-radius: 10px;
    text-align: left;
    padding: 3px; }
  
  .hotkey {
    background: white;
    width: 32px;
    padding: 1px;
    outline: none; }
  
  #fightLog {
    overflow-y: scroll;
    margin-top: 4px;
    margin-left: 4px; }
  
  .log_claws {
    background: RGBA(212, 141, 118, 0.7); }
  
  .log_teeth {
    background: RGBA(255, 255, 255, 0.7); }
  
  #itemList {
    display: grid;
    grid-template-columns: repeat(auto-fill, 73px);
    margin: 0 2px 0 2px; }
  
  .itemInMouth, .catrot {
    cursor: pointer;
    margin: 0 1px 1px 0; }
    .itemInMouth img, .catrot img {
      padding: 1px;
      display: block; }
  
  .active_thing {
    box-shadow: 0 0 0 1px #1874e5 inset;
    border-radius: 4px; }
  
  .active_thing.is_locked {
    position: relative; }
  
  .active_thing.is_locked:before {
    content: "";
    background-image: url("/cw3/symbole/item_lock.svg");
    background-size: 15px 16px;
    background-repeat: no-repeat;
    top: 3px;
    right: 3px;
    width: 15px;
    height: 16px;
    position: absolute; }
  
  #layer {
    width: 200px; }
  
  #tr_mouth {
    background-color: #FFDEAD; }
  
  .symbole {
    width: 15px;
    height: 15px;
    background: url("/cw3/symbole/icons.png") no-repeat;
    padding: 0;
    margin: 0; }
  
  .parameter {
    border: 1px solid black;
    width: 150px;
    height: 15px; }
  
  .parameter, .parameter td {
    margin: 0;
    padding: 0;
    border-spacing: 0; }
    #sky {
      background-repeat: no-repeat; }
    `
    css += ``
      let itemlistwid = globals.cgRotWid;
      itemlistwid = itemlistwid - 12;
      console.log(itemlistwid, ' itemlistwid')
    css += `
    #main_table {
      background: 0 !important;
      }
    #parameter {
      position: absolute;
      top: ${globals.cgParY}px;
      left: ${globals.cgParX}px;
      width: ${globals.cgParWid}px;
      height: ${globals.cgParHei}px;
      background: ${globals.cgParCol} !important;
      color: ${globals.cgParFCol} !important;}
    td#history {
      position: absolute;
      top: ${globals.cgHisY}px;
      left: ${globals.cgHisX}px;
      width: ${globals.cgHisWid}px;
      height: ${globals.cgHisHei}px;
      background: ${globals.cgHisCol} !important;
      color: ${globals.cgHisFCol} !important;
      padding: 6px;
      overflow: auto;}
    td#history a {
      color: ${globals.cgHisFCol} !important;}
    .ui-icon-gripsmall-diagonal-se {
      position: absolute;
      bottom: 1px;
      right: 1px; }
  div#clockContainer {
    position: absolute !important;
    top: ${globals.cgClockY}px;
    left: ${globals.cgClockX}px;
    width: ${globals.cgClockWid}px;
    height: ${globals.cgClockHei}px;
    font-size: ${globals.clockFontWeight}px !important;
    background-color: ${globals.cgClockCol} !important;
    color:${globals.cgClockFCol} !important;
    font-weight: bolder;
    font-family: Montserrat;
    display: grid;
    align-content: center;}
  div#clockContainer div#clock, div#clockContainer div#date {
    margin-left: 4px;}
  
    #tr_chat {
      position: absolute;
      top: ${globals.cgChatY}px;
      left: ${globals.cgChatX}px;
      width: ${globals.cgChatWid}px;
      height: ${globals.cgChatHei}px;
      background: ${globals.cgChatCol} !important;
      color: ${globals.cgChatFCol} !important;}
    #chat_form {
      margin: 5px;
      padding: 0;
      width: 100%;}
    span.chat_text {
      width: 300px !important;}
    #volume {
      margin: 2px;
      margin-top: 4px;}
    #chat_msg {
      position: relative;
      top: -10px;
      left: -2px;
      width: 99.6%;}
    .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header {
      background: ${globals.cgChatSliderCol} !important;
      border: ${globals.cgChatSliderBorderCol} 1px solid;}
   /* #volume{
      background-color: var(--BBO) !important;
      border: var(--BRDR) solid 2px !important;
      color: var(--TXT) !important;} */
      .ui-slider .ui-slider-handle {
        background: ${globals.cgChatSliderCol} !important;
        border: ${globals.cgChatSliderBorderCol} !important; }
      .ui-slider {
        background: ${globals.cgChatSliderLineCol} !important;
        border: ${globals.cgChatSliderLineBorder} !important; }
  
      #msg_send, #mit, #mitok, input#text {
      background-color: ${globals.cgInputCol}!important;
      color: ${globals.cgInputFCol}!important;
      }
    #sky {
      position: absolute;
      top: ${globals.cgSkyY}px;
      left: ${globals.cgSkyX}px;
      width: ${globals.cgSkyWid}px;
      height: ${globals.cgSkyHei}px;}
  
    #tr_tos {
      display: block;
      position: absolute;
      top: ${globals.cgTOSY}px;
      left: ${globals.cgTOSX}px;
      width: ${globals.cgTOSWid}px;
      height: ${globals.cgTOSHei}px;
      background: ${globals.cgTOSCol} !important;
      text-align: center;}
  
    #tr_actions {
      position: absolute;
      top: ${globals.cgDeysY}px;
      left: ${globals.cgDeysX}px;
      width: ${globals.cgDeysWid}px;
      height: ${globals.cgDeysHei}px;
      background: ${globals.cgDeysCol} !important;
      padding: 6px !important;
      overflow: auto;
      color: ${globals.cgDeysFCol} !important;}
    #tr_actions a {
      color: ${globals.cgDeysFCol} !important;}
    #block_mess {
      position: absolute;
      width: 490px;
      padding: 0px;
      text-align: center !important;}
    #dein {
      width: 300px;
      height: 155px;
      overflow: auto;}
    #akten {
      width: 300px;
      height: 155px;}
    #mit {
      background-color: var(--BBO);
      color: var(--TXT);}
    #mitok {
      background-color: var(--BBO);
      color: var(--TXT);}
  
    #family {
      position: absolute;
      top: ${globals.cgRSY}px;
      left: ${globals.cgRSX}px;
      width: ${globals.cgRSWid}px;
      height: ${globals.cgRSHei}px;
      background:${globals.cgRSCol} !important;
      padding: 6px;
      color: ${globals.cgRSFCol} !important;}
    #family a {
      color: ${globals.cgRSFCol} !important;}
  
    .small {
      display: block;
      position: absolute;
      top: ${globals.cgSmallY}px;
      left: ${globals.cgSmallX}px;
      width: ${globals.cgSmallWid}px;
      height: ${globals.cgSmallHei}px;
      background: ${globals.cgSmallCol} !important;
      font-size: ${globals.cgSmallFW}px;
      text-align: center;
      font-weight: bold;
      color: ${globals.cgSmallFCol} !important;}
    .small a {
      color: ${globals.cgSmallFCol} !important;}
    span.small ~ br, span.other_cats_list ~ br {
      display: none;}
  
    span.other_cats_list {
      position: absolute;
      top: ${globals.cgOCLY}px;
      left: ${globals.cgOCLX}px;
      color: var(--TXT)}
  
    #tr_mouth {
      position: absolute;
      top: ${globals.cgRotY}px;
      left: ${globals.cgRotX}px;
      width: ${globals.cgRotWid}px;
      height: ${globals.cgRotHei}px;
      background: ${globals.cgRotCol} !important;
      padding: 6px !important;
      overflow: auto;
      color: ${globals.cgRotFCol} !important;}
    #tr_mouth a {
      color: ${globals.cgRotFCol} !important;}
        #itemList {
          width: ${itemlistwid}px;
          }
  
    #app>p:not([id])::before {
      content: 'Тёмные баллы: ';
      font-weight: bold;
  }
  
  #app>p:not([id]) {
      display: block;
      position: absolute;
      top: ${globals.cgTBY}px;
      left: ${globals.cgTBX}px;
      width: ${globals.cgTBWid}px;
      height: ${globals.cgTBHei}px;
      background: ${globals.cgTBCol} !important;
      text-align: center;
      color: ${globals.cgTBFCol} !important;}
  
  #app p:not([id])>b {
      display: none;
  
  }
  a#parameters-alert {
  position: absolute;
  top: ${globals.cgParAlertY}px;
  left: ${globals.cgParAlertX}px;
  color: ${globals.cgParAlertFCol}
  }
    `
    if (globals.cgBorders) {
        css+= `td#parameter, tr#tr_tos, #sky, div#clockContainer, td#history, td#family, span.small, tr#tr_chat, tr#tr_actions, tr#tr_mouth, #location, #tr_field {
       border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
      }
    if (globals.cgTbBorder) {
      css+= `#app>p:not([id]) {
      border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
    }
    if (globals.cgIsBorderRad) {
        css+= `td#parameter, tr#tr_tos, #sky, div#clockContainer, td#history, td#family, span.small, tr#tr_chat, tr#tr_actions, tr#tr_mouth, #tr_field {
        border-radius: ${globals.cgBorderRad}px !important;}`
      }
    if (globals.cgIsTBBorderRad) {
      css+= `#app>p:not([id]) {
      border-radius: ${globals.cgBorderRad}px;}`
    }
    if (globals.cgIsLocBorderRad) {
      css+= `#location {
      border-radius: ${globals.cgBorderRad}px;}`
    }
    if (globals.cgInputBorders) {
      css+= `#msg_send, #mit, #mitok, input#text {
      border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
    }
    if (globals.cgInfoH2DelMargins) {
      css+= `tr#tr_info td table#info_main tbody tr td h2 {
      margin: 0;
      }`
    }
    if (globals.cgDelRSH2) {
      css+= `table#info_main tbody tr td#family h2 {display: none;}`
    }
    if (globals.cgDelHisH2) {
      css+= `table#info_main tbody tr td#history h2 {display: none;}`
    }
    if (globals.cgDelParH2) {
      css+= `table#info_main tbody tr td#parameter h2 a:first-of-type {display: none;}`
    }
    if (1 == 1) {
      css+= `tr#tr_info td table#info_main tbody tr td h2 {font-size: ${globals.cgInfoH2FontSize}px;}`
    }
    if (globals.cgSeparateLocation) {
      css+= `
    #location {
      display: block;
      position: fixed;
      top: ${globals.cgLocY}px;
      left: ${globals.cgLocX}px;
      width: ${globals.cgLocWid}px;
      height: ${globals.cgLocHei}px;
      background: ${globals.cgLocCol} !important;
      font-size: ${globals.cgLocFW}px;
      text-align: center;
      font-weight: bold;
      color: ${globals.cgLocFCol} !important;}
  
    #history_block div {
      font-size: 0;
      background-color: transparent !important;}`
    }
    if (globals.cgIsFieldFix) {
      css+= `tr#tr_field {
      position: absolute;
      top: ${globals.cgFieldY}px;
      left: ${globals.cgFieldX}px;}
      `
    }
    if (globals.cgDeleteScrolls) {
    css+= `  ::-webkit-scrollbar {
      width: 18px;
  }
  
  ::-webkit-scrollbar-track {
      background: transparent !important;
  }
  
  ::-webkit-scrollbar-thumb {
      background: transparent !important;
  }
  
  ::-webkit-scrollbar-corner {
      background: transparent !important;
  }`
    }
  
    css+= `</style>`
    $('head').append(css);
  
  
    let svgDrag = `<svg
       version="1.1"
       id="svg1"
       width="15"
       height="15"
       viewBox="0 0 512 512"
       sodipodi:docname="Перетаскивалка.svg"
       inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:svg="http://www.w3.org/2000/svg">
      <defs
         id="defs1" />
      <sodipodi:namedview
         id="namedview1"
         pagecolor="#ffffff"
         bordercolor="#000000"
         borderopacity="0.25"
         inkscape:showpageshadow="2"
         inkscape:pageopacity="0.0"
         inkscape:pagecheckerboard="0"
         inkscape:deskcolor="#d1d1d1"
         inkscape:zoom="1.4628906"
         inkscape:cx="255.65821"
         inkscape:cy="256"
         inkscape:window-width="1680"
         inkscape:window-height="987"
         inkscape:window-x="1672"
         inkscape:window-y="-8"
         inkscape:window-maximized="1"
         inkscape:current-layer="g1" />
      <g
         inkscape:groupmode="layer"
         inkscape:label="Image"
         id="g1">
        <image
           width="512"
           height="512"
           preserveAspectRatio="none"
           xlink:href="data:image/png;base64,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&#10;+38EJmBX0eCZhgAAAABJRU5ErkJggg==&#10;"
           id="image1"
           style="display:none" />
        <path
           style="fill:#000000;stroke-width:1.22836"
           d="m 248.01647,509.68891 c -4.64883,-2.38491 -84.87814,-82.23219 -87.39664,-86.98046 -3.49873,-6.5964 -2.16922,-16.06914 3.10169,-22.09932 4.82223,-5.51688 16.0054,-7.73376 22.45924,-4.45218 1.58087,0.80381 13.51502,12.038 26.5203,24.96487 l 23.64595,23.50337 V 360.18712 275.74907 H 151.93665 67.526251 l 24.745646,24.87432 c 15.955403,16.0384 25.049303,26.10024 25.600513,28.32542 1.32029,5.32981 -0.0745,13.74959 -2.94548,17.78161 -4.94754,6.94816 -17.002977,9.84272 -24.508883,5.88467 C 88.593692,351.65307 67.937476,331.61542 44.51532,308.08698 -1.5274282,261.83528 -0.96727816,262.56516 1.0792099,251.48892 c 0.7381862,-3.99531 6.4187587,-10.19975 42.8222831,-46.77139 23.084162,-23.19076 43.552922,-42.99809 45.48614,-44.01631 6.95901,-3.66521 17.992277,-1.72041 23.046987,4.06242 5.03236,5.75728 6.60543,15.41307 3.50451,21.51157 -0.80381,1.58088 -12.038,13.51502 -24.964865,26.5203 l -23.503389,23.64596 h 84.438084 84.43805 V 152.00342 67.565341 l -23.64595,23.503377 c -13.00528,12.926872 -24.93943,24.161062 -26.5203,24.964872 -6.45384,3.28158 -17.63701,1.0647 -22.45924,-4.45218 -5.26472,-6.02312 -6.59834,-15.485174 -3.11476,-22.099323 1.01822,-1.933218 20.82556,-22.401979 44.01631,-45.486136 36.57163,-36.4035222 42.77608,-42.0840947 46.77139,-42.8222821 11.07624,-2.04648675 10.34635,-2.6066379 56.59806,43.4361121 23.52844,23.422148 43.56609,44.078364 44.52811,45.902719 3.95805,7.505908 1.06349,19.56135 -5.88467,24.50889 -4.03202,2.87104 -12.4518,4.26576 -17.78161,2.94548 -2.22518,-0.55121 -12.28701,-9.64511 -28.32542,-25.60052 L 275.65461,67.620716 v 84.410394 84.41036 h 84.43805 84.43808 l -23.50338,-23.64596 c -12.92686,-13.00528 -24.16106,-24.93942 -24.96487,-26.5203 -3.10091,-6.0985 -1.52784,-15.75429 3.50453,-21.51157 5.05469,-5.78283 16.08797,-7.72763 23.04697,-4.06242 1.93323,1.01822 22.40199,20.82555 45.48614,44.01631 45.37357,45.58313 44.86649,44.92018 42.82228,55.98409 -0.73819,3.99531 -6.41875,10.19975 -42.82228,46.77139 -23.08415,23.19076 -43.55291,42.99809 -45.48614,44.01631 -6.61414,3.48358 -16.0762,2.14997 -22.09932,-3.11476 -5.51687,-4.82223 -7.73376,-16.00539 -4.45218,-22.45923 0.80381,-1.58088 12.03801,-13.51502 24.96487,-26.5203 l 23.50338,-23.64596 h -84.43808 -84.43805 v 84.43805 84.43807 l 23.64596,-23.50337 c 13.00528,-12.92687 24.93943,-24.16106 26.5203,-24.96487 6.45384,-3.28158 17.637,-1.0647 22.45923,4.45218 5.2677,6.02651 6.59934,15.49374 3.10848,22.09932 -2.75252,5.20842 -84.37162,86.0732 -88.40465,87.58761 -4.88378,1.83388 -10.66649,1.5993 -14.96746,-0.60715 z"
           id="path1" />
      </g>
    </svg>`
  
    function configureBlock(blockId, widthVar, heightVar, xPosVar, yPosVar) {
    const block = $(`${blockId}`);
    block.resizable({
      handles: 'all',
      resize: function (event, ui) {
        const newWidth = ui.size.width;
        const newHeight = ui.size.height;
        setSettings(`${widthVar}`, newWidth);
        setSettings(`${heightVar}`, newHeight);
      }
    });
    block.draggable({
      containment: "document",
      drag: function (event, ui) {
        const newXPos = ui.offset.left;
        const newYPos = ui.offset.top;
        setSettings(`${xPosVar}`, newXPos);
        setSettings(`${yPosVar}`, newYPos);
      }
    });
  }
  $(document).ready(function(){
    setTimeout(function(){
    $('.cs-set').on('change', function() {
      let key = this.id;
      let val = this.type === 'checkbox' ? this.checked : this.value;
      if (this.tagName === 'SELECT') {
        val = $(this).prop('selectedIndex');
      }
      setSettings(key, val);
      console.log(key, ': ', val, '.')
    });
  
  $(document).ready(function() {
    $("#ctFolderBtns span").click(function() {
      var folderNumber = $(this).attr('id').replace('folHandle', '');
      $("#folder1, #folder2, #folder3").hide();
      $("#folder" + folderNumber).show();
    });
  });
  

        $('.cs-set').on('change', function() {
            let key = this.id;
            let val = this.type === 'checkbox' ? this.checked : this.value;
            if (this.tagName === 'SELECT') {
              val = $(this).prop('selectedIndex');
            }
            setSettings(key, val);
            console.log(key, ': ', val, '.')
          });
      configureBlock('#sky', 'cgSkyWid', 'cgSkyHei', 'cgSkyX', 'cgSkyY');
      configureBlock('td#history', 'cgHisWid', 'cgHisHei', 'cgHisX', 'cgHisY');
      configureBlock('#parameter', 'cgParWid', 'cgParHei', 'cgParX', 'cgParY');
      configureBlock('tr#tr_chat', 'cgChatWid', 'cgChatHei', 'cgChatX', 'cgChatY');
      configureBlock('tr#tr_actions', 'cgDeysWid', 'cgDeysHei', 'cgDeysX', 'cgDeysY');
      configureBlock('td#family', 'cgRSWid', 'cgRSHei', 'cgRSX', 'cgRSY');
      configureBlock('span.small', 'cgSmallWid', 'cgSmallHei', 'cgSmallX', 'cgSmallY');
      configureBlock('tr#tr_mouth', 'cgRotWid', 'cgRotHei', 'cgRotX', 'cgRotY');
      configureBlock('span.other_cats_list', 'cgOCLWid', 'cgOCLHei', 'cgOCLX', 'cgOCLY');
      configureBlock('#tr_tos', 'cgTOSWid', 'cgTOSHei', 'cgTOSX', 'cgTOSY');
      configureBlock('#app>p:not([id])', 'cgTBWid', 'cgTBHei', 'cgTBX', 'cgTBY');
      configureBlock('div#clockContainer', 'cgClockWid', 'cgClockHei', 'cgClockX', 'cgClockY');
      configureBlock('a#parameters-alert', 'cgParAlertWid', 'cgParAlertHei', 'cgParAlertX', 'cgParAlertY');
      if (globals.cgSeparateLocation) {
        configureBlock('#location', 'cgLocWid', 'cgLocHei', 'cgLocX', 'cgLocY');
      }
      if (globals.cgIsFieldFix) {
        configureBlock('tr#tr_field', 'cgFieldWid', 'cgFieldHei', 'cgFieldX', 'cgFieldY');
      }
      $("#compactTool").draggable({
        containment: "document",
        handle: "#ctHeader",
        drag: function (event, ui) {
          const newXPos = ui.offset.left;
          const newYPos = ui.offset.top;
          setSettings('ctTecPosX', newXPos);
          setSettings('ctTecPosY', newYPos);
        }
      });

      }, 500)


  
  
  const inputImport = document.getElementById('inputImport');
  const inputExport = document.getElementById('inputExport');

  function importSettings() {
    try {
      const importedSettings = JSON.parse(inputImport.value);
      Object.keys(importedSettings).forEach(key => {
        const localStorageKey = 'cs_n_' + key;
        if (typeof importedSettings[key] === 'string' && !isNaN(parseFloat(importedSettings[key]))) {
          globals[key] = parseFloat(importedSettings[key]);
          window.localStorage.setItem(localStorageKey, parseFloat(importedSettings[key]));
        } else {
          globals[key] = importedSettings[key];
          window.localStorage.setItem(localStorageKey, importedSettings[key]);
        }
      });
  
      alert('Настройки импортированы успешно');
    } catch (error) {
      alert('Ошибка при импорте настроек');
    }
  }
  
  function exportSettings() {
    const settingsToExport = {};
    ['cgBorderWid', 'cgBorderType', 'cgBorderCol', 'cgBorderRad', 'cgIsBorderRad', 'cgBodyCol', 'cgFieldWid', 'cgFieldHei', 'cgFieldX', 'cgFieldY', 'cgIsFieldFix', 'cgParWid', 'cgParHei', 'cgParX', 'cgParY', 'cgParCol', 'cgParFCol', 'cgTOSWid', 'cgTOSHei', 'cgTOSX', 'cgTOSY', 'cgTOSCol', 'cgSkyWid', 'cgSkyHei', 'cgSkyX', 'cgSkyY', 'cgSmallWid', 'cgSmallHei', 'cgSmallX', 'cgSmallY', 'cgSmallCol', 'cgSmallFCol', 'cgOCLWid', 'cgOCLHei', 'cgOCLX', 'cgOCLY', 'cgOCLFCol', 'cgChatWid', 'cgChatHei', 'cgChatX', 'cgChatY', 'cgChatCol', 'cgChatFCol', 'cgClockWid', 'cgClockHei', 'cgClockX', 'cgClockY', 'cgClockCol', 'cgClockFCol', 'cgTBWid', 'cgTBHei', 'cgTBX', 'cgTBY', 'cgTBCol', 'cgTBFCol', 'cgHisWid', 'cgHisHei', 'cgHisX', 'cgHisY', 'cgHisCol', 'cgHisFCol', 'cgDeysWid', 'cgDeysHei', 'cgDeysX', 'cgDeysY', 'cgDeysCol', 'cgDeysFCol', 'cgRotWid', 'cgRotHei', 'cgRotX', 'cgRotY', 'cgRotCol', 'cgRotFCol', 'cgLocWid', 'cgLocHei', 'cgLocX', 'cgLocY', 'cgLocCol', 'cgLocFCol', 'cgRSWid', 'cgRSHei', 'cgRSX', 'cgRSY', 'cgRSCol', 'cgRSFCol', 'cgInfoH2DelMargins', 'cgInfoH2FontSize', 'cgDelRSH2', 'cgDelHisH2', 'cgDelParH2', 'cgSeparateLocation', 'cgLocFW', 'cgFontSize', 'cgBorders', 'cgTbBorder', 'cgSmallFW', 'cgYouBG', 'cgYouFC', 'cgInputCol', 'cgInputFCol', 'cgInputBorders', 'cgIsTBBorderRad', 'cgIsLocBorderRad', 'cgDeleteScrolls', 'cgChatSliderCol', 'cgChatSliderBorderCol', 'cgChatSliderLineCol', 'cgChatSliderLineBorder'].forEach(key => {
      settingsToExport[key] = globals[key];
    });
    inputExport.value = JSON.stringify(settingsToExport, null, 2);
    document.getElementById('outputExport').value = JSON.stringify(settingsToExport, null, 2);
  
  }
  inputImport.addEventListener('change', importSettings);
  inputExport.addEventListener('click', exportSettings);
})
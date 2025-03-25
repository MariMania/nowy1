/*********************************************** 
 * Stroop Pl 2 Warunki Podstawowy Builder *
 ***********************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'stroop pl 2 warunki podstawowy builder';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrukcjaRoutineBegin());
flowScheduler.add(instrukcjaRoutineEachFrame());
flowScheduler.add(instrukcjaRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(koniecRoutineBegin());
flowScheduler.add(koniecRoutineEachFrame());
flowScheduler.add(koniecRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
   resources: [
    {'name': 'dane_stroop_2_warunki.xlsx', 'path': 'dane_stroop_2_warunki.xlsx'}
  ]
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrukcjaClock;
var Instrukcja_tekst;
var key_resp_instrukcja;
var trialClock;
var text_target;
var key_resp_target;
var koniecClock;
var text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instrukcja"
  instrukcjaClock = new util.Clock();
  Instrukcja_tekst = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instrukcja_tekst',
    text: 'Za chwilę weźmiesz udział w eksperymencie.\nTwoim zadaniem jest jak najszybsze i jak najdokładniejsze rozpoznanie koloru wyświetlanego słowa. \nSłowa oznaczające kolory, które mogą pasować lub nie pasować do koloru czcionki.\nNie zwracaj uwagi na treść słowa – skup się na kolorze czcionki. \n\nNaciśnij odpowiedni klawisz (strzałkę):\n- Czerwony = lewo\n- Zielony = dół\n- Niebieski = prawo\n\nAby rozpocząć naciśnij spację.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instrukcja = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text_target = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_target',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_target = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "koniec"
  koniecClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Koniec eksperymentu. \nDziękujemy za udział',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instrukcjaMaxDurationReached;
var _key_resp_instrukcja_allKeys;
var instrukcjaMaxDuration;
var instrukcjaComponents;
function instrukcjaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrukcja' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instrukcjaClock.reset();
    routineTimer.reset();
    instrukcjaMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instrukcja.keys = undefined;
    key_resp_instrukcja.rt = undefined;
    _key_resp_instrukcja_allKeys = [];
    psychoJS.experiment.addData('instrukcja.started', globalClock.getTime());
    instrukcjaMaxDuration = null
    // keep track of which components have finished
    instrukcjaComponents = [];
    instrukcjaComponents.push(Instrukcja_tekst);
    instrukcjaComponents.push(key_resp_instrukcja);
    
    for (const thisComponent of instrukcjaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrukcjaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrukcja' ---
    // get current time
    t = instrukcjaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instrukcja_tekst* updates
    if (t >= 0.0 && Instrukcja_tekst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instrukcja_tekst.tStart = t;  // (not accounting for frame time here)
      Instrukcja_tekst.frameNStart = frameN;  // exact frame index
      
      Instrukcja_tekst.setAutoDraw(true);
    }
    
    
    // *key_resp_instrukcja* updates
    if (t >= 0.0 && key_resp_instrukcja.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instrukcja.tStart = t;  // (not accounting for frame time here)
      key_resp_instrukcja.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instrukcja.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrukcja.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrukcja.clearEvents(); });
    }
    
    if (key_resp_instrukcja.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instrukcja.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instrukcja_allKeys = _key_resp_instrukcja_allKeys.concat(theseKeys);
      if (_key_resp_instrukcja_allKeys.length > 0) {
        key_resp_instrukcja.keys = _key_resp_instrukcja_allKeys[_key_resp_instrukcja_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instrukcja.rt = _key_resp_instrukcja_allKeys[_key_resp_instrukcja_allKeys.length - 1].rt;
        key_resp_instrukcja.duration = _key_resp_instrukcja_allKeys[_key_resp_instrukcja_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrukcjaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrukcjaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrukcja' ---
    for (const thisComponent of instrukcjaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instrukcja.stopped', globalClock.getTime());
    key_resp_instrukcja.stop();
    // the Routine "instrukcja" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'dane_stroop_2_warunki.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _key_resp_target_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    text_target.setColor(new util.Color(kolor));
    text_target.setText(target);
    key_resp_target.keys = undefined;
    key_resp_target.rt = undefined;
    _key_resp_target_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_target);
    trialComponents.push(key_resp_target);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_target* updates
    if (t >= 0.5 && text_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_target.tStart = t;  // (not accounting for frame time here)
      text_target.frameNStart = frameN;  // exact frame index
      
      text_target.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_target.setAutoDraw(false);
    }
    
    
    // *key_resp_target* updates
    if (t >= 0.5 && key_resp_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_target.tStart = t;  // (not accounting for frame time here)
      key_resp_target.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_target.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target.clearEvents(); });
    }
    
    if (key_resp_target.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_target.getKeys({keyList: ['left', 'right', 'down'], waitRelease: false});
      _key_resp_target_allKeys = _key_resp_target_allKeys.concat(theseKeys);
      if (_key_resp_target_allKeys.length > 0) {
        key_resp_target.keys = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].name;  // just the last key pressed
        key_resp_target.rt = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].rt;
        key_resp_target.duration = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_target.keys == poprawna_odp) {
            key_resp_target.corr = 1;
        } else {
            key_resp_target.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_target.keys === undefined) {
      if (['None','none',undefined].includes(poprawna_odp)) {
         key_resp_target.corr = 1;  // correct non-response
      } else {
         key_resp_target.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_target.corr, level);
    }
    psychoJS.experiment.addData('key_resp_target.keys', key_resp_target.keys);
    psychoJS.experiment.addData('key_resp_target.corr', key_resp_target.corr);
    if (typeof key_resp_target.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_target.rt', key_resp_target.rt);
        psychoJS.experiment.addData('key_resp_target.duration', key_resp_target.duration);
        routineTimer.reset();
        }
    
    key_resp_target.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var koniecMaxDurationReached;
var koniecMaxDuration;
var koniecComponents;
function koniecRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'koniec' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    koniecClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    koniecMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS.experiment._experimentName + '_' + psychoJS.experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS.experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'zFIzkcwgAYHy', // UPDATE WITH YOUR DATAPIPE EXPERIMENT ID
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    
    psychoJS.experiment.addData('koniec.started', globalClock.getTime());
    koniecMaxDuration = null
    // keep track of which components have finished
    koniecComponents = [];
    koniecComponents.push(text);
    
    for (const thisComponent of koniecComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function koniecRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'koniec' ---
    // get current time
    t = koniecClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of koniecComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function koniecRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'koniec' ---
    for (const thisComponent of koniecComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('koniec.stopped', globalClock.getTime());
    if (koniecMaxDurationReached) {
        koniecClock.add(koniecMaxDuration);
    } else {
        koniecClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

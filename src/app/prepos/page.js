"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../footer/page";

const PREPOSITIONS = ["av", "etter", "for", "fra", "i", "med", "om", "over", "på", "til"];

const initialCards = [
  { q: "Ling hilser _____ sjefen i Trøndersk rør og vann.", a: "Ling hilser <b>på</b> sjefen i Trøndersk rør og vann.", p: "på" },
  { q: "Ling tenker _____ Yang og Ding.", a: "Ling tenker <b>på</b> Yang og Ding.", p: "på" },
  { q: "Ling venter på Yang _____ bussholdeplassen.", a: "Ling venter på Yang <b>på</b> bussholdeplassen.", p: "på" },
  { q: "Ding venter _____ at barne-tv skal begynne.", a: "Ding venter <b>på</b> at barne-tv skal begynne.", p: "på" },
  { q: "_____ grunn av de gode karakterene sine fikk Yang en god jobb.", a: "<b>På</b> grunn av de gode karakterene sine fikk Yang en god jobb.", p: "på" },
  { q: "Ling stoler _____ Yang.", a: "Ling stoler <b>på</b> Yang.", p: "på" },
  { q: "Ling setter pris _____ at hun får komme på jobbintervju.", a: "Ling setter pris <b>på</b> at hun får komme på jobbintervju.", p: "på" },
  { q: "Yang holder _____ med et forskningsprosjekt.", a: "Yang holder <b>på</b> med et forskningsprosjekt.", p: "på" },
  { q: "_____ den ene siden er Norge et stort land. _____ den andre siden bor det få mennesker her.", a: "<b>På</b> den ene siden er Norge et stort land. <b>på</b> den andre siden bor det få mennesker her.", p: "på" },
  { q: "Ling må søke _____ mange jobber i Trondheim.", a: "Ling må søke <b>på</b> mange jobber i Trondheim.", p: "på" },
  { q: "Tror du _____ Gud?", a: "Tror du <b>på</b> Gud?", p: "på" },
  { q: "Tror du _____ det som mannen din sier?", a: "Tror du <b>på</b> det som mannen din sier?", p: "på" },
  { q: "Ling lurer _____ om Ding skal gå _____ offentlig eller privat skole.", a: "Ling lurer <b>på</b> om Ding skal gå <b>på</b> offentlig eller privat skole.", p: "på" },
  { q: "Ling lurer _____ hvilken skole Ding skal begynne på.", a: "Ling lurer <b>på</b> hvilken skole Ding skal begynne på.", p: "på" },
  { q: "Hyggelig å se deg! _____ like måte.", a: "Hyggelig å se deg! <b>I</b> like måte.", p: "i" },
  { q: "_____ løpet av uka må vi bestemme hvilken skole Ding skal gå på.", a: "<b>I</b> løpet av uka må vi bestemme hvilken skole Ding skal gå på.", p: "i" },
  { q: "Jeg vil ha et eple _____ stedet for en banan.", a: "Jeg vil ha et eple <b>i</b> stedet for en banan.", p: "i" },
  { q: "Jeg har vært så trøtt _____ det siste.", a: "Jeg har vært så trøtt <b>i</b> det siste.", p: "i" },
  { q: "Tyholt ligger _____ nærheten av Gløshaugen.", a: "Tyholt ligger <b>i</b> nærheten av Gløshaugen.", p: "i" },
  { q: "Yang er veldig interessert _____ kjemi.", a: "Yang er veldig interessert <b>i</b> kjemi.", p: "i" },
  { q: "Du må lese teksten. _____ tillegg må du lære vokabularet.", a: "Du må lese teksten. <b>i</b> tillegg må du lære vokabularet.", p: "i" },
  { q: "Nå må vi komme _____ gang med leksene våre.", a: "Nå må vi komme <b>i</b> gang med leksene våre.", p: "i" },
  { q: "_____ mellomtiden har Yang jobbet _____ England.", a: "<b>I</b> mellomtiden har Yang jobbet <b>i</b> England.", p: "i" },
  { q: "_____ frokost spiser jeg ei brødskive med ost.", a: "<b>Til</b>frokost spiser jeg ei brødskive med ost.", p: "til" },
  { q: "Jeg gleder meg _____ hytteturen i helga.", a: "Jeg gleder meg <b>til</b> hytteturen i helga.", p: "til" },
  { q: "Yang gir en gave _____ Ling fordi hun har bursdag.", a: "Yang gir en gave <b>til</b> Ling fordi hun har bursdag.", p: "til" },
  { q: "De har ikke råd _____ å kjøpe bil nå.", a: "De har ikke råd <b>til</b> å kjøpe bil nå.", p: "til" },
  { q: "De har ikke råd _____ ny bil nå.", a: "De har ikke råd <b>til</b> ny bil nå.", p: "til" },
  { q: "Han har ikke tid _____ å komme på møtet i dag.", a: "Han har ikke tid <b>til</b> å komme på møtet i dag.", p: "til" },
  { q: "Vi må legge _____ rette for at Ding skal gjøre det bra på skolen.", a: "Vi må legge <b>til</b> rette for at Ding skal gjøre det bra på skolen.", p: "til" },
  { q: "Yang og Ling har funnet seg godt _____ rette i Trondheim.", a: "Yang og Ling har funnet seg godt <b>til</b> rette i Trondheim.", p: "til" },
  { q: "Yang har kjennskap _____ flere fagområder i kjemi.", a: "Yang har kjennskap <b>til</b> flere fagområder i kjemi.", p: "til" },
  { q: "Jeg anbefaler denne iskremen _____ deg.", a: "Jeg anbefaler denne iskremen <b>til</b> deg.", p: "til" },
  { q: "Alle ansatte har plikt _____ å komme på møtet.", a: "Alle ansatte har plikt <b>til</b> å komme på møtet.", p: "til" },
  { q: "Jeg viser _____ annonse i Adresseavisen og søker med dette stillingen som regnskapsmedarbeider.", a: "Jeg viser <b>til</b> annonse i Adresseavisen og søker med dette stillingen som regnskapsmedarbeider.", p: "til" },
  { q: "Hun spiser brødskiver _____ ost.", a: "Hun spiser brødskiver <b>med</b> ost.", p: "med" },
  { q: "Hun spiser pølse _____ brød.", a: "Hun spiser pølse <b>med</b> brød.", p: "med" },
  { q: "Hun drikker kaffe _____ melk.", a: "Hun drikker kaffe <b>med</b> melk.", p: "med" },
  { q: "Jeg følger _____ på mange amerikanske tv-serier.", a: "Jeg følger <b>med</b> på mange amerikanske tv-serier.", p: "med" },
  { q: "Yang må hjelpe Ling _____ norskleksene.", a: "Yang må hjelpe Ling <b>med</b> norskleksene.", p: "med" },
  { q: "Kan du ta _____ (deg) ei kake på festen?", a: "Kan du ta <b>med</b> (deg) ei kake på festen?", p: "med" },
  { q: "Vil du bli _____ (meg) på kino i kveld?", a: "Vil du bli <b>med</b> (meg) på kino i kveld?", p: "med" },
  { q: "Jeg jobber _____ forskning.", a: "Jeg jobber <b>med</b> forskning.", p: "med" },
  { q: "Hva driver du _____ i fritida?", a: "Hva driver du <b>med</b> i fritida?", p: "med" },
  { q: "_____ eksempel kan vi flytte til England igjen.", a: "<b>For</b> eksempel kan vi flytte til England igjen.", p: "for" },
  { q: "Studentene har bruk _____ mer undervisning.", a: "Studentene har bruk <b>for</b> mer undervisning.", p: "for" },
  { q: "Studentene har behov _____ mer undervisning.", a: "Studentene har behov <b>for</b> mer undervisning.", p: "for" },
  { q: "Ling bestemmer seg _____ å søke på jobben.", a: "Ling bestemmer seg <b>for</b> å søke på jobben.", p: "for" },
  { q: "Ling er redd _____ troll.", a: "Ling er redd <b>for</b> troll.", p: "for" },
  { q: "Ling er redd _____ å begrense Dings muligheter.", a: "Ling er redd <b>for</b> å begrense Dings muligheter.", p: "for" },
  { q: "Ling er redd _____ at de begrenser Dings muligheter.", a: "Ling er redd <b>for</b> at de begrenser Dings muligheter.", p: "for" },
  { q: "_____ det meste trives Ding på skolen.", a: "<b>For</b> det meste trives Ding på skolen.", p: "for" },
  { q: "Ling er opptatt _____ kvaliteten på utdanningen.", a: "Ling er opptatt <b>av</b> kvaliteten på utdanningen.", p: "av" },
  { q: "Han er avhengig _____ alkohol.", a: "Han er avhengig <b>av</b> alkohol.", p: "av" },
  { q: "_____ og til spiser Ling og Yang pølser til middag.", a: "<b>Av</b> og til spiser Ling og Yang pølser til middag.", p: "av" },
  { q: "Noen/mange _____ studentene har ikke gjort leksa.", a: "Noen/mange <b>av</b> studentene har ikke gjort leksa.", p: "av" },
  { q: "Noe/mye _____ vannet renner ut fra dusjen.", a: "Noe/mye <b>av</b> vannet renner ut fra dusjen.", p: "av" },
  { q: "Yang hørte _____ en ny restaurant.", a: "Yang hørte <b>om</b> en ny restaurant.", p: "om" },
  { q: "Yang vet _____ mange fine restauranter i Trondheim.", a: "Yang vet <b>om</b> mange fine restauranter i Trondheim.", p: "om" },
  { q: "Denne teksten dreier seg _____ preposisjoner.", a: "Denne teksten dreier seg <b>om</b> preposisjoner.", p: "om" },
  { q: "Denne oppgaven handler _____ preposisjoner.", a: "Denne oppgaven handler <b>om</b> preposisjoner.", p: "om" },
  { q: "Hvor er nøklene mine? Jeg har lett _____ dem i hele dag!", a: "Hvor er nøklene mine? Jeg har lett <b>etter</b> dem i hele dag!", p: "etter" },
  { q: "_____ hvert håper jeg at jeg kan få fast stilling.", a: "<b>Etter</b> hvert håper jeg at jeg kan få fast stilling.", p: "etter" },
  { q: "_____ min mening er fast stilling bedre enn midlertidig stilling.", a: "<b>Etter</b> min mening er fast stilling bedre enn midlertidig stilling.", p: "etter" },
  { q: "Maten i Norge er forskjellig _____ maten i Kina.", a: "Maten i Norge er forskjellig <b>fra</b> maten i Kina.", p: "fra" },
  { q: "Si _____ hvis du ikke kan komme på festen.", a: "Si <b>fra</b> hvis du ikke kan komme på festen.", p: "fra" },
  { q: "Hun ble svært overrasket _____ resultatet i fotballkampen.", a: "Hun ble svært overrasket <b>over</b> resultatet i fotballkampen.", p: "over" },
  { q: "Det var _____ 100 personer på festen", a: "Det var <b>over</b> 100 personer på festen", p: "over" },
];

// ufak yardımcı
const cx = (...c) => c.filter(Boolean).join(" ");

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Preposisjoner() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [lastPick, setLastPick] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setCards(shuffle(initialCards));
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    setDisabledButtons({});
    setShowAnswer(false);
    setLastPick(null);
  }, [currentIndex]);

  const current = cards[currentIndex];
  const progressText = useMemo(
    () => (cards.length ? `${currentIndex + 1}/${cards.length}` : ""),
    [cards.length, currentIndex]
  );
  const progressPct = useMemo(
    () => (cards.length ? Math.round(((currentIndex + 1) / cards.length) * 100) : 0),
    [cards.length, currentIndex]
  );

  const handleAnswer = (value) => {
    if (!current) return;
    setLastPick(value);

    if (value === current.p) {
      setShowAnswer(true);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 1200);
    } else {
      setDisabledButtons((prev) => ({ ...prev, [value]: true }));
    }
  };

  if (!current) {
    return (
      <main className="min-h-dvh grid place-items-center bg-gradient-to-b from-zinc-50 to-zinc-100">
        <div className="animate-pulse text-zinc-500">Yükleniyor…</div>
      </main>
    );
  }

  const isCorrectPhase = showAnswer;

  return (
    <main className="min-h-dvh bg-gradient-to-b from-zinc-50 to-zinc-100 p-4">
      <div className="mx-auto w-full max-w-3xl">
        {/* Kart */}
        <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
          {/* Başlık / Progress */}
          <div className="p-5 sm:p-6 border-b border-zinc-100">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-lg sm:text-xl font-semibold text-zinc-800">PREPOSISJONER</h1>
              <span className="text-sm text-zinc-500 tabular-nums">{progressText}</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-zinc-100">
              <div
                className={cx(
                  "h-2 rounded-full transition-all",
                  isCorrectPhase ? "bg-emerald-500" : "bg-blue-500"
                )}
                style={{ width: `${progressPct}%` }}
                aria-hidden
              />
            </div>
          </div>

          {/* Soru / Cevap */}
          <div className="p-5 sm:p-6">
            {!isCorrectPhase ? (
              <h3 id="question" className="text-xl sm:text-2xl font-medium text-zinc-800">
                {current.q}
              </h3>
            ) : (
              <h3
                id="answer"
                className="text-xl sm:text-2xl font-semibold text-emerald-700"
                dangerouslySetInnerHTML={{ __html: current.a }}
              />
            )}

            {/* Butonlar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {PREPOSITIONS.map((btn) => {
                const isWrong = disabledButtons[btn];
                const isLocked = isCorrectPhase || isWrong;

                return (
                  <button
                    key={btn}
                    type="button"
                    value={btn}
                    onClick={() => handleAnswer(btn)}
                    disabled={isLocked}
                    aria-pressed={lastPick === btn}
                    className={cx(
                      "px-4 py-2 rounded-xl border text-sm font-medium transition",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed",
                      isCorrectPhase
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : isWrong
                        ? "bg-zinc-100 border-zinc-200 text-zinc-400"
                        : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50 active:scale-[.98]"
                    )}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>

            {/* İpucu / Durum */}
            <div className="mt-5 text-sm">
              {!isCorrectPhase ? (
                <p className="text-zinc-500">Doğru preposisjonen’i seç.</p>
              ) : (
                <p className="text-emerald-600 font-medium">Riktig! 👏</p>
              )}
            </div>
          </div>
        </div>

        {/* Alt bar */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <span>⇧/⇩ for å bla på siden,</span>
      <span>Tab for å fokusere på knappene.</span>

        </div>
      </div>
      <Footer/> 
        </main>
        
  );
  
}

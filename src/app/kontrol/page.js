"use client";

import CardControlCompressor from "../card/CardControlCompressor";
import CardSetPoint from "../card/CardSetPoint";
import CardSwitchEcoMode from "../card/CardSwitchEcoMode";
import CardSwitchEvapFan from "../card/CardSwitchEvapFan";
import DasborNavbar from "../dasbor-navbar";

export default function Kontrol() {
    return (
    <main>
      
      <DasborNavbar activelink="Kontrol" />
      
      <div className="container mx-auto">

        <div className="grid md:grid-cols-4 gap-4 grid-cols-2">

          <CardControlCompressor />
          <CardSwitchEvapFan />
          <CardSwitchEcoMode />
          <CardSetPoint/>

        </div>

      </div>
    </main>
    )
}
"use client";

import { Bounded } from "@/components/Bounded";
import { asText } from "@prismicio/client";
// import { Content } from "@prismicio/types";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<any>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {/* Slide 1 */}
          <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
            <div
              className={clsx(
                "col-start-1",
                "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
              )}
            >
              <h2 className="text-balance text-6xl font-bold">
                From Bubbles to Bottles – Our Refreshment Journey
              </h2>
              <div className="mt-4 text-xl">
                <p>
                  Ever wondered how your favorite cool drink is made? Let’s take
                  a quick behind-the-scenes tour.
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <strong>Purified Water Selection:</strong> We begin with
                    crystal-clear, purified water – the foundation of every
                    refreshing sip.
                  </li>
                  <li>
                    <strong>Flavor Fusion:</strong> Natural and artificial
                    flavors are carefully blended to craft that signature taste
                    – fruity, citrusy, cola, or classic.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
            <div
              className={clsx(
              "col-start-2", // Changed to col-start-2 to move content to the right
              "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30 text-white",
              )}
            >
              <h2 className="text-balance text-6xl font-bold">
                The Magic of Carbonation
              </h2>
              <div className="mt-4 text-xl">
                <ul className="mt-6 space-y-4">
                  <li>
                    <strong>Carbonation Magic:</strong> Carbon dioxide is
                    infused under pressure to give the drink its iconic bubbly
                    kick.
                  </li>
                  <li>
                    <strong>Chill & Fill:</strong> The drink is chilled and
                    poured into sterilized bottles using high-speed, hygienic
                    machines.
                  </li>
                  <li>
                    <strong>Sealed Fresh, Served Cold:</strong> Every bottle is
                    capped, labeled, and ready to cool your mood – anytime,
                    anywhere.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;

import React, { useState, useEffect } from "react";
import { ROUTER } from "../utils/constants";
import Slider from "../components/common/slider";
import { Link } from "react-router-dom";

const Test = () => {
    return (
        <div>
            <div className="">
                <div className="container-fluid">
                    <div className="project-item alio1 md:mb-6 mb-4">
                        <img className="w-100 w-full" src="./images/test/mockup.webp" loading="lazy" />
                    </div>
                    
                    <div className="project-item md:pb-6 pb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 sm:col-span-6">
                                <img className="w-100" src="./images/test/deerly.webp" alt="#" loading="lazy" />
                            </div>
                            <div className="col-span-12 sm:col-span-6 cake-intro-content flex items-end bg-[#FFFDF8]">
                                <div className="p-7">
                                    <div className="heading_4 mb-4">About website</div>
                                    <div className="body_text">
                                        Welcome to The Deerly, a carefully curated online store
                                        designed with both style and functionality in mind. As a UX/UI designer, I’ve focused on creating a seamless and visually appealing shopping experience. Our collection features unique, high-quality products that bring a touch of elegance to your home. From décor to accessories, each item is selected for its craftsmanship and beauty. Explore and shop with ease, and let us help you
                                        transform your space into something truly special.
                                    </div>
                                    {/* <div className="small_text text-right font-italic">
                                        <a href="https://nthuyduong.github.io/CakeBlog/#/" target="_blank">Comming soon: https://nthuyduong.github.io/CakeBlog/#/</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:pb-6 pb-4 text-center">
                        <div className="mb-2 heading_6">VIEW THE WEBSITE</div>
                        <a className="text-link" href="https://thedeerly.com/" target="_blank">https://thedeerly.com/</a>
                    </div>
                    <div className="project-item md:pb-6 pb-4">
                        <img className="w-100 w-full" src="./images/test/deerly-mobile.webp" loading="lazy" />
                    </div>
                </div>
            </div>
            {/* <div class="container-fluid m-w mx-auto w-full my-0 mb-4">
                <div class="mb-6">We all know how stress can negatively impact our skin, leading to issues like breakouts, dark circles, and dryness. Chronic stress takes a toll on our skin health. However, the positive effects of happiness on our skin often go unnoticed. Happiness is a crucial factor in achieving a naturally radiant complexion that lasts.
                    In this post, we'll delve into how stress affects the skin negatively, explore the ways in which happiness can enhance your skin, and discuss practical tips for prioritizing joy in your daily life. Our aim is to empower you with insights that contribute to long-lasting skin wellness
                </div>
                <div class="grid grid-cols-12 gap-2 sm:gap-4">
                    <div class="col-span-12 sm:col-span-6">
                        HINH ANH O DAY
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        <h2 class="heading_4 mb-4">How does sleep contribute to healthy skin function?</h2>
                        <div class="mb-2">According to WebMD, the mind and the skin are closely related. This explains why chronic stress harms your skin. For instance, when you are more stressed and tense, your body in turn releases stress hormones that increase your skin’s oil production. This increase in oil production then increases your chances of experiencing breakouts.</div>
                        <div>Acne isn’t the only sign of how negative emotions can be seen in the skin. Eczema, hives, and rosacea are just some skin problems that can result from negative emotions and stress.</div>
                    </div>
                </div>
            </div>
            <div class="bg-primary my-6 py-6">
                <div class="container-fluid m-w mx-auto w-full my-0">
                    <h2 class="heading_4 mb-4">What I can do the morning after a bad sleep?</h2>
                    <div>
                        <div>On the other hand, happiness serves as the overarching secret ingredient that naturally bestows upon you radiant, healthy, and glowing skin. This is because happiness reduces stress levels, which, as discussed earlier, releases stress hormones that can lead to various skin problems. </div>
                        <div class="my-2">The influence of positive emotions on enhancing your skin is undeniable. Often referred to as the 'happiness glow,' this theory posits that positive emotions can contribute to the repair and healing of your skin, resulting in an effortlessly healthy and radiant appearance.</div>
                        <div>It's crucial to emphasize that while happiness plays a vital role in enhancing your skin, you still need to adhere to your daily skincare routine. This entails removing all your makeup before bedtime, cleansing your face with a quality cleanser, moisturizing, and, of course, applying SPF. At BB Aesthetic, we provide a range of gentle cleansers and sunscreens, ensuring you have all the essential skincare products to maintain your flawless skin.</div>
                    </div>
                </div>
            </div>
            <div class="container-fluid m-w mx-auto w-full my-0 pb-6">
                <h2 class="heading_4 mb-4">Tips for Making Your Happiness a Daily Priority</h2>
                <div class="">
                    <div>
                        <div class="heading_6 mb-3">1/ Smile often: </div>
                        <div>
                            Studies have shown that genuine smiles release feel-good hormones in the body, contributing to healthy and radiant skin. You don't have to wait for a random reason to smile; you can bring a smile to your face by thinking about something or someone that brings you joy. It could be your toddler, a fond memory, a beloved pet, or a sweet surprise from a loved one. The act of recalling something that made you smile triggers the release of those feel-good hormones, making you feel better—and look better too!
                        </div>
                    </div>

                </div>
                <div class="grid grid-cols-12 gap-2 sm:gap-4 mt-6">
                    <div class="col-span-12 sm:col-span-6">
                        <div class="mb-4">
                            <div class="heading_6 mb-3">
                                2/ Spend more time face-to-face with loved ones
                            </div>
                            <div>
                                Don't let your cell phone create a barrier between you and the people who matter most. Set aside time for shared meals, walks, sports events, and other activities with those who care about you, and whom you care about. Building strong social connections not only benefits your heart, mind, and immune system but also contributes to the health of your skin—simply by bringing joy into your life. Prioritize moments spent with those who love and appreciate you for being yourself. And, if meeting in person isn't possible, a FaceTime call with a loved one, like my two-year-old grandson, can do wonders to lift your spirits
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        HINH ANH O DAY
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-2 sm:gap-4 mt-6">
                    <div class="col-span-12 sm:col-span-6">
                        HINH ANH O DAY
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        <div class="mb-4">
                            <div class="heading_6 mb-3">
                                3/ Manage your stress
                            </div>
                            <div>
                                However, Cultural Stress—the constant stress of modern living—is a relatively recent phenomenon, especially in evolutionary terms. Our bodies simply haven't had enough time to adapt to the all-encompassing, ever-growing stress brought on by contemporary lifestyles. Consequently, it falls upon us to manage it effectively. This involves actions like silencing our phones, ensuring adequate sleep and exercise, maintaining a healthy diet, and incorporating stress management practices into our routine. These practices can range from morning affirmations, journaling, meditation, yoga, to inspirational reading—anything that helps slow your breathing, reduce heart rate, and restore inner calm. Additionally, don't underestimate the rejuvenating power of physical self-care, such as massage, facials, or indulging in a soothing, candlelit bubble bath.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Test;
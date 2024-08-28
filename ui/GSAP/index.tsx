// FOR NORMAL PARALAX EFFECT
// useEffect(() => {
//   const parallaxItems: HTMLElement[] =
//     gsap.utils.toArray<HTMLElement>("[data-item]");
//   const tl = gsap.timeline();

//   parallaxItems.forEach((item, index) => {
//     if (index > 0) {
//       tl.to(item, {
//         scrollTrigger: {
//           trigger: item,
//           start: "top bottom",
//           end: `+=${item.offsetHeight * index} top`,
//           scrub: 1,
//           markers: false,
//           onUpdate: (self) => {
//             const nextTrigger = self.next() as ScrollTrigger | undefined;
//             nextTrigger?.refresh();
//           },
//           onLeave: () => ScrollTrigger.refresh()
//         },
//         marginTop: `-${item.offsetHeight}px`,
//         ease: "power1.out"
//       });
//     }
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     tl.kill();
//   };
// }, []);

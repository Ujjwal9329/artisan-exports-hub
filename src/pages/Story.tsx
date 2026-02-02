import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

// Images
import bhedaghatImage from "@/assets/bhedaghat-marble-cliffs.jpg";
import templeCarvingsImage from "@/assets/temple-carvings.jpg";
import artisanDetailImage from "@/assets/artisan-detail-work.jpg";
import artisanToolsImage from "@/assets/artisan-tools.jpg";
import workshopImage from "@/assets/workshop-sculptures.jpg";

/* ============================================
   SECTION COMPONENTS
============================================ */

const StoryHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bhedaghatImage}
          alt="Marble cliffs of Bhedaghat along the Narmada River"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-6 md:px-12 lg:px-20 py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-gold-light font-medium mb-6"
        >
          Our Heritage
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium text-ivory leading-tight mb-8"
        >
          Where Stone
          <br />
          <span className="text-gradient-gold">Becomes Soul</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-champagne/90 max-w-3xl mx-auto leading-relaxed"
        >
          From the ancient marble cliffs of Bhedaghat to the world's most distinguished
          interiors, discover the thousand-year legacy of Jabalpur stone craft—where
          every chisel strike carries the wisdom of generations and every curve
          whispers stories of devotion, nature, and the eternal human spirit.
        </motion.p>


      </div>
    </section>
  );
};

const IntroductionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-eyebrow mb-6 block">The Art of Storytelling in Stone</span>

          <h2 className="heading-section text-foreground mb-8">
            A Living Legacy from the Heart of <span className="text-gold">India</span>
          </h2>

          <div className="space-y-6 text-body">
            <p>
              In the verdant heartland of Madhya Pradesh, where the sacred Narmada River
              carves through towering marble cliffs, an extraordinary tradition has flourished
              for over a millennium. <strong className="text-foreground">Jabalpur Stone Craft</strong> is
              not merely an art form—it is a profound dialogue between the human hand and
              the living earth, a conversation that transforms raw marble into vessels of
              meaning, beauty, and cultural memory.
            </p>

            <p>
              Here, in workshops that have witnessed the passage of dynasties and the rise
              of nations, master artisans practice an ancient alchemy. They read the veins
              of marble like sacred texts, understanding which stones will yield to the
              chisel with grace and which demand a gentler approach. Every sculpture that
              emerges from their hands carries within it the accumulated wisdom of
              forty generations.
            </p>

            <p>
              The motifs that adorn these creations are not decorative choices but a
              visual language—lotus blooms speaking of spiritual awakening, elephants
              embodying wisdom and prosperity, geometric mandalas mapping the infinite
              patterns of the cosmos. Each symbol connects the present moment to an
              unbroken lineage of artistic expression that predates even the temples
              of Khajuraho.
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="w-12 h-px bg-border" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="w-12 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HistoricalOrigins = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-luxury">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={templeCarvingsImage}
                alt="Ancient temple stone carvings showing traditional motifs"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />

            {/* Era Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-6 bg-background px-6 py-4 shadow-luxury"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Heritage Since</span>
              <div className="text-3xl font-heading font-semibold text-gold">10th Century</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-eyebrow mb-4 block">Historical Origins</span>
            <h2 className="heading-section text-foreground mb-6">
              From Temple Sanctuaries to
              <br />
              <span className="text-gold">Global Collections</span>
            </h2>

            <div className="space-y-5 text-body">
              <p>
                The story begins in the <strong className="text-foreground">Kalachuri era</strong>,
                when the region that is now Jabalpur flourished under enlightened rulers who
                understood art as a pathway to the divine. During the 10th and 11th centuries,
                these patrons commissioned the construction of magnificent temples that would
                become universities of stone craft.
              </p>

              <p>
                The <strong className="text-foreground">Chousath Yogini Temple</strong> at Bhedaghat
                stands as perhaps the most significant of these sacred schools. Built in a
                circular design unknown elsewhere in India, this temple features 64 intricately
                carved shrines to the yogini goddesses. The artisans who created these figures
                developed techniques that would define the aesthetic vocabulary of the region
                for centuries to come.
              </p>

              <p>
                As the centuries progressed, the craft evolved beyond temple architecture.
                During the Mughal period, stone carvers incorporated Persian influences into
                their repertoire—arabesques and geometric patterns that added new dimensions
                to their artistic language. By the British colonial era, Jabalpur marble had
                found admirers across continents, with pieces gracing the collections of
                European nobility and American industrialists alike.
              </p>

              <p>
                Today, this millennium-old tradition continues to evolve, with contemporary
                artisans creating pieces that honor ancestral techniques while speaking to
                modern sensibilities—functional art that transforms living spaces into
                sanctuaries of beauty.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BhedaghatSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-light font-medium mb-4 block">
            The Source
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-ivory mb-6">
            Bhedaghat: Where the <span className="text-gradient-gold">Narmada Reveals Her Treasure</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-champagne/90 text-lg leading-relaxed">
              Twenty-five kilometers from Jabalpur, the sacred Narmada River flows through
              a canyon of pure white marble—cliffs that rise a hundred feet above the
              turquoise waters, their surfaces weathered into fantastic shapes that seem
              carved by divine hands. This is <strong className="text-ivory">Bhedaghat</strong>,
              the geographical and spiritual heart of India's marble tradition.
            </p>

            <p className="text-champagne/80 leading-relaxed">
              The marble of Bhedaghat possesses a quality found nowhere else on Earth.
              Geologically young by marble standards, it retains a softness that allows
              artisans to achieve a level of detail impossible with harder stones. Yet once
              carved and polished, it develops a luminous surface that seems to glow from
              within—as if the stone remembers the moonlight that pilgrims have witnessed
              reflecting off these cliffs for millennia.
            </p>

            <p className="text-champagne/80 leading-relaxed">
              The international art world first formally recognized this treasure at the
              <strong className="text-ivory"> Paris Exhibition of 1865</strong>, where Jabalpur
              marble sculptures astonished European critics accustomed to Italian Carrara.
              They noted the Indian stone's unusual warmth, its capacity to hold the most
              delicate details, and the way finished pieces seemed to emanate light. Orders
              began arriving from Paris, London, and New York—the beginning of a global
              appreciation that continues to this day.
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-2 border-gold pl-6 py-4 my-8">
              <p className="text-xl font-heading italic text-ivory/90">
                "The marble of the Narmada cliffs possesses a quality of luminescence that
                defies explanation—as though the stone itself harbors an inner light."
              </p>
              <cite className="text-sm text-gold-light mt-3 block not-italic">
                — Report of the Paris Universal Exhibition, 1865
              </cite>
            </blockquote>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { value: "100+", label: "Feet of marble cliffs", desc: "Towering formations along the Narmada" },
              { value: "1865", label: "Paris Exhibition", desc: "First international recognition" },
              { value: "Unique", label: "Geological composition", desc: "Softer marble enabling fine detail" },
              { value: "Sacred", label: "Spiritual significance", desc: "Pilgrimage site for millennia" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 border border-charcoal-light/30 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-heading font-semibold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-ivory font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-champagne/60">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArtisanInspiration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motifs = [
    {
      title: "Sacred Deities",
      description: "Figures of Ganesha, Lakshmi, and Buddha represent spiritual aspirations and divine blessings. Each deity carries specific symbolism—Ganesha removes obstacles, Lakshmi brings prosperity, Buddha embodies enlightenment.",
      symbol: "🕉️",
    },
    {
      title: "Lotus & Flora",
      description: "The lotus emerges pure from muddy waters, symbolizing spiritual awakening and the triumph of beauty over adversity. Floral patterns speak of growth, renewal, and the eternal cycles of nature.",
      symbol: "🪷",
    },
    {
      title: "Elephants & Fauna",
      description: "The elephant embodies wisdom, strength, and royal dignity—qualities treasured across cultures. Birds represent freedom and the soul's journey; peacocks symbolize immortality and watchfulness.",
      symbol: "🐘",
    },
    {
      title: "Geometric Mandalas",
      description: "Precise geometric patterns map cosmic order and infinite possibility. These designs create visual meditation, inviting contemplation of the mathematical beauty underlying all creation.",
      symbol: "◇",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-eyebrow mb-4 block">Creative Vision</span>
            <h2 className="heading-section text-foreground mb-6">
              The Artisan's <span className="text-gold">Inspiration</span>
            </h2>

            <div className="space-y-5 text-body mb-10">
              <p>
                The artisans of Jabalpur do not merely execute designs—they channel a living
                tradition that draws from the deepest wells of Indian civilization. Their
                inspiration flows from four interconnected streams: the natural world that
                surrounds them, the mythological universe inherited from their ancestors,
                the rhythms of daily life in their communities, and the sacred symbolism
                embedded in Hindu, Buddhist, and Jain traditions.
              </p>

              <p>
                Watch a master carver at work, and you will see moments of complete stillness
                when the artisan seems to listen to the stone itself. Many speak of this as
                a form of meditation, a dialogue with the material that reveals what form
                wishes to emerge. This intuitive connection, developed over decades of
                practice, distinguishes true masters from mere technicians.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={artisanDetailImage}
                alt="Artisan hands carving intricate floral pattern into marble"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          </motion.div>

          {/* Motifs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-xl font-medium text-foreground mb-6">
              The Language of Motifs
            </h3>

            {motifs.map((motif, index) => (
              <motion.div
                key={motif.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{motif.symbol}</span>
                  <div>
                    <h4 className="font-heading text-lg font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
                      {motif.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {motif.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RecognitionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-luxury">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-eyebrow mb-4 block">Global Recognition</span>
          <h2 className="heading-section text-foreground mb-8">
            Authenticated Excellence,
            <br />
            <span className="text-gold">Protected Heritage</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* GI Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-background border border-border text-left hover:-translate-y-2 hover:shadow-luxury hover:border-gold/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-3xl">🏷️</span>
              </div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-4 group-hover:text-gold transition-colors">
                Geographical Indication Tag
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Jabalpur Stone Craft has been awarded the prestigious
                <strong className="text-foreground"> Geographical Indication (GI) Tag</strong> by
                the Government of India. This certification authenticates the origin and
                traditional production methods, protecting the craft from imitation and
                ensuring that every piece genuinely originates from this historic region.
              </p>
            </motion.div>

            {/* UNESCO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-background border border-border text-left hover:-translate-y-2 hover:shadow-luxury hover:border-gold/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-4 group-hover:text-gold transition-colors">
                UNESCO Cultural Recognition
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The tradition has been nominated for recognition under
                <strong className="text-foreground"> UNESCO's Intangible Cultural Heritage</strong> list,
                acknowledging its significance to humanity's artistic legacy. This nomination
                places Jabalpur stone craft alongside the world's most treasured cultural
                traditions, from Japanese woodworking to Italian glassmaking.
              </p>
            </motion.div>
          </div>

          <p className="text-body max-w-2xl mx-auto">
            These recognitions affirm what collectors and connoisseurs have long understood:
            Jabalpur stone craft represents not merely Indian artistry, but a contribution
            to global cultural heritage that deserves protection, celebration, and continuation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const HumanStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src={artisanToolsImage}
                alt="Traditional stone carving tools"
                className="w-full h-48 object-cover"
              />
              <img
                src={artisanDetailImage}
                alt="Artisan hands at work"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="pt-8">
              <img
                src={workshopImage}
                alt="Workshop filled with marble sculptures"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold-light font-medium mb-4 block">
              The Human Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-ivory mb-6">
              Hands That Shape <span className="text-gradient-gold">Eternity</span>
            </h2>

            <div className="space-y-5 text-champagne/85 leading-relaxed">
              <p>
                Behind every sculpture stands a human story—of children who first held a chisel
                at their grandfather's knee, of women who prepare the fine polishing compounds
                according to recipes unchanged for centuries, of families who have shaped stone
                through wars and famines and festivals, through drought years and years of plenty.
              </p>

              <p>
                The training of a master stone carver is a journey of decades. A young apprentice
                begins with the simplest tasks—grinding tools, preparing surfaces, observing the
                masters at work. Gradually, over years, they are trusted with simple cuts, then
                more complex ones, until finally they develop the intuition that distinguishes
                craft from artistry.
              </p>

              <p>
                The tools themselves carry meaning. Many artisans work with chisels passed down
                through three or four generations, the wooden handles worn smooth by ancestral
                hands, the metal reforged and resharpened countless times but never replaced.
                To work with such a tool is to work in communion with those who came before.
              </p>

              <p>
                Today, these artisans navigate the delicate balance between preservation and
                evolution. They honor the techniques of their ancestors while adapting designs
                to contemporary sensibilities. A traditional elephant motif might now grace a
                minimalist vase destined for a Manhattan penthouse; a sacred lotus pattern
                adorns a table lamp designed for a Dubai hotel suite.
              </p>

              <p className="text-ivory font-medium">
                In their workshops, tradition and modernity exist not in tension but in
                harmony—each informing and enriching the other, creating pieces that speak
                to the present while carrying the weight and wisdom of a thousand years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BrandConnection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-eyebrow mb-4 block">Our Commitment</span>
          <h2 className="heading-section text-foreground mb-8">
            Becoming Part of the <span className="text-gold">Legacy</span>
          </h2>

          <div className="space-y-6 text-body text-left md:text-center mb-12">
            <p>
              At <strong className="text-foreground">AUREX ARTISAN</strong>, we understand that
              when you acquire one of our pieces, you are not simply decorating a space—you
              are becoming a custodian of living heritage. Every marble vase, every carved
              elephant, every stone lamp that leaves our workshops carries within it the
              accumulated artistry of forty generations.
            </p>

            <p>
              Our commitment to the artisans of Jabalpur goes beyond commerce. We work directly
              with family workshops, ensuring fair compensation that honors both the skill and
              the time invested in each creation. We support apprenticeship programs that
              transmit ancient knowledge to new generations. We document traditional techniques
              to ensure they are never lost.
            </p>

            <p>
              When you choose AUREX ARTISAN, you choose to participate in the continuation of
              one of humanity's great artistic traditions. You choose to support families who
              have dedicated their lives to the pursuit of beauty. You choose to bring into
              your space a piece that connects you to the sacred waters of the Narmada, to
              the moonlit cliffs of Bhedaghat, to a millennium of human creativity and devotion.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Authentic Heritage", desc: "Every piece traceable to verified artisan workshops" },
              { title: "Ethical Partnership", desc: "Fair compensation and sustainable practices" },
              { title: "Living Tradition", desc: "Supporting the craft for future generations" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 border border-border hover:border-gold/40 transition-colors"
              >
                <h4 className="font-heading text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 md:p-12 bg-muted border border-border"
          >
            <p className="text-lg md:text-xl font-heading italic text-foreground mb-6">
              "In acquiring a piece of Jabalpur stone craft, you do not merely purchase
              an object. You enter into relationship with a tradition, with the hands
              that shaped the stone, with the earth from which it came, and with all
              those who will encounter its beauty in the centuries to come."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="/collections"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-gold-dark transition-all duration-300"
              >
                Explore Collections
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-border text-foreground font-medium tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                Begin Your Journey
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================
   MAIN PAGE COMPONENT
============================================ */

const Story = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Seo
          title="Our Story"
          description="Discover the thousand-year legacy of Jabalpur stone craft. A journey from ancient marble cliffs to modern luxury interiors."
          canonical="https://aurexartisan.com/story"
        />
        <StoryHero />
        <IntroductionSection />
        <HistoricalOrigins />
        <BhedaghatSection />
        <ArtisanInspiration />
        <RecognitionSection />
        <HumanStories />
        <BrandConnection />
      </main>
      <Footer />
    </div>
  );
};

export default Story;

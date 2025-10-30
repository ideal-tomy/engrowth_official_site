import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { IMAGE_PATHS } from '@/constants/images';

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden aspect-[2021/748]">
        <Image
          src={IMAGE_PATHS.hero.top}
          alt="Engrowthが実現したい世界"
          fill
          priority
          sizes="100vw"
          className="object-cover aspect-[2021/748] w-full h-full"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-white opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="p-6">
            <h1 className="text-2xl md:text-6xl font-bold font-serif mb-6 text-white">
              Engrowthが実現したい世界
            </h1>
            <p className="text-base md:text-xl font-serif max-w-4xl mx-auto text-white">
              学びたい情熱と才能が
            </p>
            <p className="text-base md:text-xl font-serif max-w-4xl mx-auto text-white">
              経済的な理由で失われない未来を目指して
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Container className="px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1: 私たちが理想とする「教育の未来」 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              1. 私たちが理想とする「教育の未来」
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                私たちが描くのは、<strong>「学びたい」という情熱と才能が、経済的な理由によって阻害されない未来</strong>です。
              </p>
              <p className="mb-6">
                高い志と才能を持つ優秀な人材が、経済的な不安によって「学ぶ機会」や「挑戦する機会」を奪われない世界。
              </p>
              <p className="mb-6">
                そして、教育が中間マージンによる「搾取」の対象ではなく、人と社会の未来に対する「公正な投資」として機能する世界です。
              </p>
            </div>
          </section>

          {/* Section 2: 理想の実現に向けたEngrowthの「仕組み」と「想い」 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              2. 理想の実現に向けたEngrowthの「仕組み」と「想い」
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed mb-8">
              <p className="mb-6">
                この理想を実現するため、Engrowthは独自の「エコシステム（関係性の構築）」と、それを支える「利益還元の仕組み（ビジネスモデル）」を構築しました。
              </p>
            </div>

            {/* Navigation Boxes */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-light-gray p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-dark-gray font-serif mb-4">
                  A. Engrowthが築く「関係性」の哲学
                </h3>
                <p className="text-dark-gray font-serif leading-relaxed mb-6">
                  <strong>受講者をパートナーと呼ぶ独自のエコシステム</strong>
                </p>
                <p className="text-dark-gray font-serif leading-relaxed mb-6">
                  なぜ私たちが受講者を「パートナー」と呼び、留学中のコンサルタントを経済的に支援するのか。Engrowthが最も大切にする「人と人との繋がり」と「支援の仕組み」についてご説明します。
                </p>
                <Link href="/about/ecosystem">
                  <Button variant="primary" size="md" className="w-full md:w-auto">
                    「エコシステム」のページへ
                  </Button>
                </Link>
              </div>

              <div className="bg-light-gray p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-dark-gray font-serif mb-4">
                  B. Engrowthが向き合う「社会課題」と「解決構造」
                </h3>
                <p className="text-dark-gray font-serif leading-relaxed mb-6">
                  <strong>私たちが解決したい「社会的損失」と「利益還元の仕組み」</strong>
                </p>
                <p className="text-dark-gray font-serif leading-relaxed mb-6">
                  なぜ今、Engrowthが必要なのか。既存の英語市場が抱える課題と、留学生が直面する現実（社会的損失）を、Engrowthがどう解決するのか。
                </p>
                <a href="#section-3">
                  <Button variant="secondary" size="md" className="w-full md:w-auto">
                    ▼ このまま読み進める
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Section 3: 私たちが向き合う「2つの社会的損失」 */}
          <section id="section-3">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              3. 私たちが向き合う「2つの社会的損失」
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                現在の社会構造には、理想の実現を阻む、2つの深刻な「ミスマッチ」が日本には存在していると考えています。
              </p>
              <p className="mb-6">
                そして私たちは、このミスマッチが引き起こす問題を、学習者個人や留学生個人の問題としてだけではなく、
                日本社会全体の深刻な「損失」であると捉えています。
              </p>
            </div>
          </section>

          {/* Section 4: 課題（１）：日本の英語学習市場が抱える「ガチャ問題」 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              日本の英語学習市場が抱える「ガチャ問題」
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                一つ目の損失は、<strong>「学習者の無駄なコスト」</strong>です。
              </p>
              <p className="mb-6">
                本気で英語を習得したいと願う人々がいます。しかし、日本の英語学習市場には、高額な広告費や運営費が上乗せされたサービスが溢れ、
                必ずしも「英語を教えるプロ」ではない人材による、テンプレ通りの指導も横行しています。
              </p>
              <p className="mb-6">
                学習者は、本物の学びに出会うために、まるで「ガチャ」のように当たり外れを賭けなければならない。
                その結果、貴重な「時間」と「予算」が、学習効果とは連動しないサービス事業者へと吸い上げられ、
                浪費されてしまっているのが現状です。
              </p>
            </div>
          </section>

          {/* Section 5: 課題（２）：優秀な留学生が直面する「経済的な壁」 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              優秀な留学生が直面する「経済的な壁」
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                二つ目の損失は、<strong>「未来の才能の喪失」</strong>です。
              </p>
              <p className="mb-6">
                世界トップレベルの環境で、高度な英語力と専門知識を武器に学ぶ優秀な日本人留学生たちがいます。
                彼ら・彼女らは、将来、日本社会に大きな価値を還元しうる「人財」です。
              </p>
              <p className="mb-6">
                しかし、深刻な円安や物価高騰が、彼らの「学び」を脅かしています。
                高額な学費や生活費を賄うことができず、学習意欲が高く優秀な成績を修めていた留学生が、留学そのものを断念した場面に何度も遭遇しました。
              </p>
              <p className="mb-6">
                この「才能の喪失」は、本人だけではなく、日本という国にとっても計り知れない「社会的損失」であると考えています。
              </p>
            </div>
          </section>

          {/* Section 6: Engrowthが目指す「知の循環エコシステム」 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              6. Engrowthが目指す「知の循環エコシステム」
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                Engrowthは、この2つの「社会的損失」を、<strong>同時に解決する「マッチング」</strong>を行います。それは、持続可能な「知の循環」を生み出すエコシステムです。
              </p>
              
              <div className="bg-light-gray p-8 rounded-lg border border-gray-200 mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="text-brand-red font-bold text-xl mr-4">•</span>
                    <div>
                      <strong>学習者（クライアント）は：</strong>
                      <p className="mt-2">
                        「ガチャ」に無駄なコストを支払う必要はもうありません。あなたの支払う費用は、
                        あなたを指導する優秀なコンサルタント（留学生）の「学び」を支える資金となります。
                        結果、あなたは「本物」のスキルを持つパートナーから、適正な価格で最高の学びを得ることができます。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red font-bold text-xl mr-4">•</span>
                    <div>
                      <strong>コンサルタント（留学生）は：</strong>
                      <p className="mt-2">
                        自らの高度な英語スキルと専門知識を正当に評価され、高水準の報酬を得て、経済的な不安なく自身のさらなる学習や研究に集中できます。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red font-bold text-xl mr-4">•</span>
                    <div>
                      <strong>日本社会（Society）は：</strong>
                      <p className="mt-2">
                        学習者は実践的な英語力を習得し、留学生は無事に学業を修め、将来的に日本社会へ大きな価値を還元します。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-semibold text-brand-red">
                私たちは、この「学習者」「留学生」「日本社会」のすべてにメリットをもたらす「三方よし」の循環こそが、
                理想の未来を実現するために必要だと考えています。
              </p>
            </div>
          </section>

          {/* Section 7: なぜ「理想のエコシステム」は実現が難しいのか？ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              7. なぜ「理想のエコシステム」は実現が難しいのか？
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                この「三方よし」のエコシステムは、多くの人が理想として掲げたい姿かもしれません。
                しかし、現在の株式会社の仕組みの中では、これを実現するには構造的な困難が伴います。
              </p>
              <p className="mb-6">
                多くの株式会社は、その仕組み上、「短期的な利益の最大化（可処分費用の獲得）」と「株主への還元」を最優先事項として運営されます。
              </p>
              <p className="mb-6">
                これは企業として合理的な行動ですが、必然的に「中間マージン」の最大化が追求されます。
                結果として、最も価値を生み出している現場の個人（＝Engrowthにおける優秀なコンサルタント）への報酬は、
                構造的に低く抑えられざるを得ません。学習者が支払う費用は、学習の質そのものではなく、
                広告費や企業の内部留保に多くが充てられてしまいます。
              </p>
              <p className="mb-6">
                それらは各企業の経営に問題があるということでは決してなく、構造や社会環境の問題です。
                私たちは、この既存の仕組み自体を「否定」したいわけではありません。
                ただ、この構造（システム）が、日本の英語教育や留学生支援における「理想の実現」を阻む最大のボトルネックになっている、
                という「現実」を踏まえ、学びの循環をより円滑に、持続的に行える環境が作り出せるのではないかと考え、Engrowthエコシステムを構築しました。
              </p>
            </div>
          </section>

          {/* Section 8: Engrowthの「答え」：利益の目的を反転させる */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray font-serif mb-8">
              8.利益の目的を反転させる
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                Engrowthは、この構造的ボトルネックを解決するために、最初から「目的」を反転させています。
              </p>
              
              <div className="bg-light-gray p-8 rounded-lg border border-gray-200 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-dark-gray font-serif mb-4">従来の目的：</h3>
                    <p className="text-dark-gray font-serif">自社の利益最大化 ＞ 個人への還元</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-red font-serif mb-4">Engrowthの目的：</h3>
                    <p className="text-dark-gray font-serif">コンサルタント（留学生）の利益最大化 ＞ 自社の利益（運営に必要な分のみ）</p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                私たちは、一般的な株式会社が目指す「利益の最大化」や「株主還元」を最初から目指していません。私たちの使命は、あくまで<strong>「才能ある個人への適正な（そして最大限の）分配」</strong>です。
              </p>

              <p className="mb-6">組織する目的そのものを帰ることによって、Engrowthは以下の強みを発揮できます。</p>

              <div className="bg-light-gray p-8 rounded-lg border border-gray-200">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-brand-red font-bold text-xl mr-4">•</span>
                    <div>
                      <strong>クライアント（学習者）へ</strong>
                      <p className="mt-2">
                        支払う費用の大半が、直接あなたを指導するコンサルタントの価値（報酬）となります。
                        そしてEngrowthのkんサルタント基準をクリアした英語力と指導力が担保されている講師からのサポートによって、
                        「最高品質」の指導が実現します。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red font-bold text-xl mr-4">•</span>
                    <div>
                      <strong>コンサルタント（留学生）へ</strong>
                      <p className="mt-2">
                        働くことに制限が設けられ、尚且つ深刻な為替問題（円安）下でも、
                        アメリカ・ヨーロッパ等で生活し学業に集中できるレベルの「高水準な報酬」が還元されます。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: 私たちの宣言 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray font-serif mb-8">
              9. 私たちの宣言
            </h2>
            <div className="prose prose-lg max-w-none text-dark-gray font-serif leading-relaxed">
              <p className="mb-6">
                Engrowthは単なる英語コンサルティング会社ではありません。
              </p>
              <p className="mb-6">
                私たちは、意欲ある学習者と、才能ある留学生を最適に結びつけることで、
                「学びたい人」「教えたい人」「日本という国」そのすべてにメリットをもたらす環境構築を目指す存在を目指しています。
              </p>
              <div className="bg-brand-red text-white p-8 rounded-lg text-center">
                <p className="text-xl font-bold font-serif mb-4">
                  あなたの「学びたい」という意志が、
                </p>
                <p className="text-xl font-bold font-serif mb-4">
                  世界で戦う誰かの「学び続ける」未来を支え、
                </p>
                <p className="text-xl font-bold font-serif mb-4">
                  その循環が、日本の未来を強くしていく。
                </p>
                <p className="text-2xl font-bold font-serif">
                  Engrowthは、そんな「三方よし」の世界を実現します。
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray font-serif mb-8">
              理想の未来を一緒に実現しませんか？
            </h2>
            <p className="text-lg text-dark-gray font-serif mb-8 max-w-2xl mx-auto">
              あなたの学びが、誰かの未来を支える。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/about/ecosystem">
                <Button variant="secondary" size="lg">
                  エコシステムについて詳しく
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default VisionPage;

"use client";

import { motion } from "framer-motion";
import { Code, Layers, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

function ServicesSection() {
    const { t } = useLanguage();
    
    return (
        <section className="relative py-20 bg-[#030303] overflow-hidden">
            {/* 背景漸變 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
            
            {/* 右上角漸變圓形 */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl" />
            
            {/* 左下角漸變圓形 */}
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* 我們的優勢部分 */}
                <div className="my-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">
                            {t('services.title') || '我們的與眾不同之處'}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-white/10 to-white/5">
                                    <Zap className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    {t('services.ai.title') || 'AI驅動的創意'}
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                {t('services.ai.description') || '我們結合人工智能與人類創意，探索傳統設計方法無法實現的可能性。AI助力我們更快、更準確地理解客戶需求，同時為設計過程帶來全新視角。'}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-white/10 to-white/5">
                                    <Layers className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    {t('services.aesthetics.title') || '東西方美學融合'}
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                {t('services.aesthetics.description') || '我們的設計團隊來自不同文化背景，將東方的禪意美學與西方的現代設計原則融為一體，創造出既有文化深度又具國際視野的獨特作品。'}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-white/10 to-white/5">
                                    <Code className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    {t('services.tech.title') || '技術與設計的完美結合'}
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                {t('services.tech.description') || '我們不僅是設計師，也是技術專家。這種跨領域的專業知識讓我們能夠創造出不僅美觀，而且功能強大、技術先進的解決方案。'}
                            </p>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        >
                            <Link 
                                href="/what" 
                                className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
                            >
                                {t('services.learnMoreButton')}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export { ServicesSection }; 
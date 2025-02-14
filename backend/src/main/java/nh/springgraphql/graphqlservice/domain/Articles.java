package nh.springgraphql.graphqlservice.domain;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.LinkedList;
import java.util.List;

public class Articles {

    public static List<Article> generateSampleArticles() {
        Writer writer1 = new Writer("1", "Alice Johnson", Contact.ofEmail("alice@example.com"));
        Writer writer2 = new Writer("2", "Bob Smith", Contact.ofPhone("+987654321"));
        Writer writer3 = new Writer("3", "Charlie Davis", Contact.ofEmail("charlie@example.com"));

        return new LinkedList<>(List.of(
            new Article(
                "1",
                OffsetDateTime.of(2023, 10, 15, 14, 0, 0, 0, ZoneOffset.ofHours(2)),
                "AI Revolutionizing Healthcare",
                """
                Artificial intelligence is rapidly transforming the healthcare industry. 
                Machine learning models are now capable of detecting diseases earlier than human doctors, 
                leading to improved treatment outcomes. Hospitals worldwide are integrating AI-assisted 
                diagnostics into their daily workflow.
                
                In addition, robotic surgeries have gained traction, enabling precision that was unimaginable 
                a decade ago. The coming years will likely see even more integration of AI in personalized medicine.
                """,
                new LinkedList<>(List.of(
                    new Comment("1", "This is incredible!"),
                    new Comment("2", "AI in healthcare is a game changer."),
                    new Comment("3", "Can't wait to see where this goes.")
                )),
                Category.TECHNOLOGY,
                writer1,
                120
            ),
            new Article(
                "2",
                OffsetDateTime.of(2025, 1, 13, 10, 30, 0, 0, ZoneOffset.ofHours(1)),
                "Climate Change and Renewable Energy",
                """
                As global temperatures continue to rise, the push for renewable energy has never been stronger. 
                Governments worldwide are heavily investing in solar, wind, and hydro energy to reduce carbon footprints. 
                These initiatives aim to replace fossil fuels and mitigate climate damage.
                
                However, there are still major challenges to overcome. Energy storage, infrastructure, and economic 
                feasibility remain critical hurdles that must be addressed in the near future.
                """,
                new LinkedList<>(List.of(
                    new Comment("4", "Renewables are the future!"),
                    new Comment("5", "We need more action now."),
                    new Comment("6", "Interesting article, well done.")
                )),
                Category.SCIENCE,
                writer2,
                95
            ),
            new Article(
                "3",
                OffsetDateTime.of(2024, 8, 5, 16, 45, 0, 0, ZoneOffset.ofHours(3)),
                "The Next Digital Revolution",
                """
                Quantum computing is poised to revolutionize industries by solving problems that classical computers 
                cannot handle efficiently. Companies like IBM, Google, and academic institutions are making rapid 
                advancements in developing quantum processors with more stable qubits.
                
                This breakthrough has major implications for fields like cryptography, materials science, 
                and artificial intelligence. However, challenges such as error correction and hardware stability 
                still need to be overcome before quantum computing becomes mainstream.
                """,
                new LinkedList<>(List.of(
                    new Comment("7", "Quantum computing sounds mind-blowing!"),
                    new Comment("8", "I wonder how soon we’ll see real-world applications."),
                    new Comment("9", "Great explanation of the topic!")
                )),
                Category.TECHNOLOGY,
                writer3,
                210
            ),
            new Article(
                "4",
                OffsetDateTime.of(2024, 7, 10, 9, 15, 0, 0, ZoneOffset.ofHours(2)),
                "The Rise of Electric Vehicles",
                """
                Electric vehicles (EVs) are quickly becoming the norm on roads worldwide. 
                With advancements in battery technology, EVs now offer greater range and faster charging times. 
                Many governments are offering incentives to encourage the shift to clean energy transportation.
                
                Despite the progress, challenges such as charging infrastructure and battery recycling 
                need further development. Still, the transition to EVs marks a significant step toward 
                reducing global carbon emissions.
                """,
                new LinkedList<>(List.of(
                    new Comment("10", "EVs are the future!"),
                    new Comment("11", "More charging stations, please!"),
                    new Comment("12", "Battery technology is improving fast.")
                )),
                Category.TECHNOLOGY,
                writer1,
                180
            ),
            new Article(
                "5",
                OffsetDateTime.of(2024, 7, 25, 12, 0, 0, 0, ZoneOffset.ofHours(4)),
                "New Discoveries in Marine Biology",
                """
                Scientists exploring the depths of the Pacific Ocean have discovered a previously unknown species 
                of glowing jellyfish. The bioluminescent organism lives at depths where sunlight does not penetrate, 
                raising new questions about deep-sea life.
                
                These discoveries highlight the importance of protecting marine ecosystems. Researchers believe 
                that studying these creatures could lead to advancements in medicine and bioengineering.
                """,
                new LinkedList<>(List.of(
                    new Comment("13", "Nature never ceases to amaze!"),
                    new Comment("14", "We must protect these creatures."),
                    new Comment("15", "Exciting research!")
                )),
                Category.SCIENCE,
                writer2,
                160
            ),
            new Article(
                "6",
                OffsetDateTime.of(2024, 7, 17, 18, 20, 0, 0, ZoneOffset.ofHours(0)),
                "Sustainable Farming and Vertical Agriculture",
                """
                Farmers worldwide are adopting innovative techniques like vertical farming to maximize food production 
                while minimizing land use. This approach utilizes stacked layers of crops grown indoors under controlled conditions, 
                reducing water consumption and pesticide use.
                
                With urbanization on the rise, sustainable farming practices are becoming essential for food security. 
                The potential of vertical farming and hydroponics offers a glimpse into a more sustainable future of agriculture.
                """,
                new LinkedList<>(List.of(
                    new Comment("16", "Vertical farming is the future!"),
                    new Comment("17", "Sustainability should be a priority."),
                    new Comment("18", "Excited to see this in more cities.")
                )),
                Category.ENVIRONMENT,
                writer3,
                175
            ),
            new Article(
                "7",
                OffsetDateTime.of(2024, 4, 15, 10, 0, 0, 0, ZoneOffset.ofHours(2)),
                "Space Exploration: Next Stop Europa",
                """
                NASA has announced plans to send a robotic mission to Europa, Jupiter's icy moon. Scientists believe 
                that beneath its frozen crust lies an ocean that may harbor microbial life.
                
                The mission will include advanced instruments capable of analyzing the moon's subsurface. If successful, 
                this could be one of the most significant discoveries in the search for extraterrestrial life.
                """,
                new LinkedList<>(List.of(
                    new Comment("19", "This is groundbreaking!"),
                    new Comment("20", "I hope we find something amazing."),
                    new Comment("21", "Space exploration is exciting.")
                )),
                Category.SCIENCE,
                writer1,
                190
            ),
            new Article(
                "8",
                OffsetDateTime.of(2024, 3, 22, 14, 30, 0, 0, ZoneOffset.ofHours(1)),
                "Advancements in Wind Energy Technology",
                """
                Wind energy is becoming one of the most efficient and cost-effective sources of renewable power. 
                Recent improvements in turbine technology have significantly increased energy output.
                
                Governments are investing in offshore wind farms to generate large-scale clean electricity. Experts 
                predict that within a decade, wind power could become the dominant energy source in several countries.
                """,
                new LinkedList<>(List.of(
                    new Comment("22", "Wind energy is a game changer!"),
                    new Comment("23", "Offshore wind farms look promising."),
                    new Comment("24", "We need more of these innovations.")
                )),
                Category.ENVIRONMENT,
                writer2,
                165
            ),
            new Article(
                "9",
                OffsetDateTime.of(2024, 2, 10, 11, 15, 0, 0, ZoneOffset.ofHours(3)),
                "CRISPR Gene Editing Breakthrough",
                """
                Scientists have successfully used CRISPR gene editing to treat genetic disorders in human trials. 
                This revolutionary technique allows precise modifications to DNA, offering potential cures for diseases 
                like sickle cell anemia and cystic fibrosis.
                
                While the results are promising, ethical concerns and long-term effects still need thorough evaluation. 
                The future of gene editing could redefine medicine as we know it.
                """,
                new LinkedList<>(List.of(
                    new Comment("25", "Medical science is advancing so fast!"),
                    new Comment("26", "CRISPR could change everything."),
                    new Comment("27", "Hoping this is accessible to all.")
                )),
                Category.SCIENCE,
                writer3,
                220
            ),
            new Article(
                "10",
                OffsetDateTime.of(2024, 1, 5, 9, 45, 0, 0, ZoneOffset.ofHours(0)),
                "Urban Forests: The Future of Green Cities",
                """
                Cities around the world are implementing urban forests to combat climate change and improve air quality. 
                These green spaces provide shade, reduce pollution, and support biodiversity in densely populated areas.
                
                Urban planning experts believe that integrating forests into cityscapes will enhance residents' well-being. 
                The challenge remains balancing development with sustainability.
                """,
                new LinkedList<>(List.of(
                    new Comment("28", "Green cities are the future!"),
                    new Comment("29", "I love seeing more trees in urban areas."),
                    new Comment("30", "Sustainability should be a priority.")
                )),
                Category.ENVIRONMENT,
                writer1,
                140
            ),
            new Article(
                "11",
                OffsetDateTime.of(2023, 12, 15, 16, 0, 0, 0, ZoneOffset.ofHours(2)),
                "Revolutionizing Water Purification",
                """
                Scientists have developed a new nanotechnology-based water purification system that removes contaminants 
                more efficiently than traditional methods. This innovation could provide clean drinking water to millions 
                worldwide.
                
                The technology is already being tested in drought-prone regions. Experts predict it will become a 
                game-changer for water accessibility and sustainability.
                """,
                new LinkedList<>(List.of(
                    new Comment("31", "Clean water is a human right!"),
                    new Comment("32", "Amazing innovation for developing nations."),
                    new Comment("33", "Hope this becomes widely available.")
                )),
                Category.SCIENCE,
                writer2,
                130
            ),
            new Article(
                "12",
                OffsetDateTime.of(2023, 11, 3, 12, 20, 0, 0, ZoneOffset.ofHours(1)),
                "Biodiversity Conservation Efforts Gain Momentum",
                """
                Conservation groups worldwide are making significant strides in protecting endangered species. 
                Efforts include reforestation projects, habitat preservation, and anti-poaching measures.
                
                Governments are also stepping in with stricter laws and funding for conservation initiatives. 
                The success of these programs could determine the survival of many species in the coming decades.
                """,
                new LinkedList<>(List.of(
                    new Comment("34", "We need to protect our planet!"),
                    new Comment("35", "Great work by conservationists."),
                    new Comment("36", "Biodiversity is crucial for ecosystems.")
                )),
                Category.ENVIRONMENT,
                writer3,
                185
            )
            ,
            new Article(
                "13",
                OffsetDateTime.of(2023, 10, 12, 15, 30, 0, 0, ZoneOffset.ofHours(2)),
                "AI-Powered Assistants in Education",
                """
                AI-driven learning platforms are revolutionizing the way students engage with education. 
                Virtual assistants can now provide personalized tutoring, adapting lessons to the individual learning 
                pace of students, ensuring they grasp concepts more effectively.
                
                While educators welcome these tools, some fear AI might replace human interaction in education. 
                Striking a balance between technology and traditional teaching methods is key to harnessing AI's 
                full potential without compromising human guidance.
                """,
                List.of(
                    new Comment("37", "AI in education is exciting!"),
                    new Comment("38", "Hope this helps students globally."),
                    new Comment("39", "I prefer human teachers, but AI could assist well.")
                ),
                Category.TECHNOLOGY,
                writer1,
                155
            ),
            new Article(
                "14",
                OffsetDateTime.of(2025, 1, 5, 11, 45, 0, 0, ZoneOffset.ofHours(1)),
                "The Impact of Reforestation on Climate Change",
                """
                Reforestation projects are playing a crucial role in absorbing carbon dioxide and reversing deforestation. 
                Countries around the world are investing in large-scale tree planting efforts to mitigate climate change effects.
                
                Environmentalists, however, stress that simply planting trees is not enough—biodiversity and sustainable 
                forest management are key. Reforestation, when combined with reduced emissions, can contribute significantly 
                to a healthier planet.
                """,
                List.of(
                    new Comment("40", "Reforestation is a must!"),
                    new Comment("41", "This gives hope for climate recovery."),
                    new Comment("42", "We need long-term solutions alongside tree planting.")
                ),
                Category.ENVIRONMENT,
                writer2,
                180
            ),
            new Article(
                "15",
                OffsetDateTime.of(2023, 8, 18, 17, 15, 0, 0, ZoneOffset.ofHours(3)),
                "Breakthrough in Battery Storage Technology",
                """
                Scientists have developed a new solid-state battery that significantly increases energy storage capacity 
                while reducing charging times. This breakthrough is expected to enhance electric vehicles and renewable 
                energy storage.
                
                Unlike traditional lithium-ion batteries, solid-state technology is safer and has a longer lifespan. 
                Experts predict this innovation will accelerate the shift towards a more sustainable energy infrastructure.
                """,
                List.of(
                    new Comment("43", "This could change the energy industry!"),
                    new Comment("44", "Faster charging times are a game changer."),
                    new Comment("45", "Excited to see this technology in EVs soon!")
                ),
                Category.TECHNOLOGY,
                writer3,
                205
            ),
            new Article(
                "16",
                OffsetDateTime.of(2025, 1, 15, 14, 10, 0, 0, ZoneOffset.ofHours(0)),
                "Coral Reef Restoration: A Race Against Time",
                """
                Marine biologists are employing new methods to restore coral reefs affected by rising ocean temperatures. 
                Techniques like coral farming and genetic adaptation are showing promising results in helping reefs recover.
                
                However, scientists warn that without addressing climate change, restoration efforts might only provide 
                temporary relief. Protecting marine ecosystems requires a global commitment to reducing carbon emissions 
                and pollution.
                """,
                List.of(
                    new Comment("46", "Coral reefs are so important to marine life."),
                    new Comment("47", "We need urgent action against ocean warming!"),
                    new Comment("48", "Great to see restoration efforts making a difference.")
                ),
                Category.ENVIRONMENT,
                writer2,
                175
            ),
            new Article(
                "17",
                OffsetDateTime.of(2023, 6, 15, 13, 45, 0, 0, ZoneOffset.ofHours(2)),
                "The Role of Wetlands in Climate Protection",
                """
                Wetlands play a crucial role in absorbing carbon dioxide and preventing flooding. Scientists are 
                emphasizing the importance of preserving these ecosystems as natural barriers against climate change.
                
                Governments worldwide are increasing funding for wetland restoration projects. Experts believe 
                protecting wetlands is as essential as reforestation in fighting global warming.
                """,
                List.of(
                    new Comment("49", "Wetlands are nature’s best flood protection!"),
                    new Comment("50", "We need stronger policies to protect these ecosystems."),
                    new Comment("51", "Glad to see awareness growing on this topic.")
                ),
                Category.ENVIRONMENT,
                writer1,
                165
            ),
            new Article(
                "18",
                OffsetDateTime.of(2023, 5, 20, 10, 10, 0, 0, ZoneOffset.ofHours(1)),
                "NASA's Search for Exoplanets Continues",
                """
                NASA's exoplanet-hunting mission has identified several planets that may have conditions suitable for life. 
                The latest discoveries were made using advanced telescopes capable of detecting atmospheric composition.
                
                Scientists are now analyzing whether these planets could sustain liquid water, a key ingredient for life. 
                If confirmed, this could be one of the most significant scientific breakthroughs of the century.
                """,
                List.of(
                    new Comment("52", "Are we alone? Exciting times ahead!"),
                    new Comment("53", "Hope we find a habitable exoplanet soon."),
                    new Comment("54", "Space exploration keeps surprising us!")
                ),
                Category.SCIENCE,
                writer2,
                220
            ),
            new Article(
                "19",
                OffsetDateTime.of(2023, 4, 10, 15, 20, 0, 0, ZoneOffset.ofHours(3)),
                "Saving Endangered Pollinators",
                """
                Pollinators like bees and butterflies are declining at an alarming rate due to habitat loss and pesticides. 
                Scientists warn that without them, global food production could suffer severe consequences.
                
                Conservation efforts include planting pollinator-friendly habitats and banning harmful pesticides. 
                If successful, these initiatives could help restore declining bee populations.
                """,
                List.of(
                    new Comment("55", "We must protect pollinators!"),
                    new Comment("56", "A world without bees would be catastrophic."),
                    new Comment("57", "Great to see awareness growing about this issue.")
                ),
                Category.ENVIRONMENT,
                writer3,
                195
            ),
            new Article(
                "20",
                OffsetDateTime.of(2023, 3, 8, 9, 30, 0, 0, ZoneOffset.ofHours(0)),
                "Microplastics Found in the Deep Ocean",
                """
                A new study reveals that microplastics have reached the deepest parts of the ocean, raising concerns 
                about marine biodiversity. Scientists found plastic particles in deep-sea organisms, highlighting the 
                widespread impact of human pollution.
                
                Calls for stricter regulations on plastic use and better waste management are growing. Researchers are 
                developing innovative ways to filter plastics from water before they reach critical ecosystems.
                """,
                List.of(
                    new Comment("58", "Plastic pollution is out of control!"),
                    new Comment("59", "We need urgent action on waste management."),
                    new Comment("60", "Shocking but not surprising.")
                ),
                Category.SCIENCE,
                writer1,
                180
            ),
            new Article(
                "21",
                OffsetDateTime.of(2023, 2, 12, 12, 50, 0, 0, ZoneOffset.ofHours(1)),
                "Geoengineering: A Last Resort for Climate Change?",
                """
                Some scientists propose geoengineering as a last-resort solution to mitigate climate change. 
                Techniques like artificial cloud seeding and carbon capture could help reduce rising temperatures.
                
                However, the long-term effects of geoengineering remain uncertain. Experts warn that these approaches 
                should only complement existing sustainability efforts, not replace them.
                """,
                List.of(
                    new Comment("61", "Geoengineering sounds risky but necessary."),
                    new Comment("62", "We need to focus on reducing emissions first."),
                    new Comment("63", "Hope we don’t have to rely on this too much.")
                ),
                Category.SCIENCE,
                writer2,
                170
            ),
            new Article(
                "22",
                OffsetDateTime.of(2023, 1, 3, 16, 40, 0, 0, ZoneOffset.ofHours(2)),
                "Revolution in Ocean Farming",
                """
                Ocean farming is emerging as a sustainable alternative to traditional agriculture. Seaweed and shellfish 
                farms require no freshwater or fertilizer, making them environmentally friendly and highly productive.
                
                Scientists believe ocean farming could help reduce the environmental footprint of food production. 
                As demand for sustainable food sources grows, interest in ocean farming is increasing worldwide.
                """,
                List.of(
                    new Comment("64", "Sustainable seafood is the way forward!"),
                    new Comment("65", "More innovation in farming is needed."),
                    new Comment("66", "Ocean farming sounds like a great solution!")
                ),
                Category.ENVIRONMENT,
                writer3,
                200
            )


        ));
    }
}

package nh.springgraphql.graphqlservice.domain;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.LinkedList;
import java.util.List;

public class Stories {

    public static List<Story> generateSampleStories() {
        Writer writer1 = new Writer("W1", "Alice Johnson", new Contact("alice@example.com", "+123456789"));
        Writer writer2 = new Writer("W2", "Bob Smith", new Contact("bob@example.com", "+987654321"));
        Writer writer3 = new Writer("W3", "Charlie Davis", new Contact("charlie@example.com", "+192837465"));

        return new LinkedList<>(List.of(
            new Story(
                "1",
                OffsetDateTime.of(2024, 10, 15, 14, 0, 0, 0, ZoneOffset.ofHours(2)),
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
            new Story(
                "2",
                OffsetDateTime.of(2024, 9, 20, 10, 30, 0, 0, ZoneOffset.ofHours(1)),
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
                Category.ENVIRONMENT,
                writer2,
                95
            ),
            new Story(
                "3",
                OffsetDateTime.of(2024, 8, 5, 16, 45, 0, 0, ZoneOffset.ofHours(3)),
                "Quantum Computing: The Next Digital Revolution",
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
                Category.SCIENCE,
                writer3,
                210
            ),
            new Story(
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
            new Story(
                "5",
                OffsetDateTime.of(2024, 6, 25, 12, 0, 0, 0, ZoneOffset.ofHours(4)),
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
            new Story(
                "6",
                OffsetDateTime.of(2024, 5, 30, 18, 20, 0, 0, ZoneOffset.ofHours(0)),
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
            new Story(
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
            new Story(
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
            new Story(
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
            new Story(
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
            new Story(
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
            new Story(
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
        ));
    }
}

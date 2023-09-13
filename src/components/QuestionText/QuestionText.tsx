import React from 'react';
import { TextQuestion } from './QuestionText.styles';
import { View } from 'react-native';

interface QuestionTextProps {
    text: string
}

const QuestionText: React.FC<QuestionTextProps> = ({ text }) => {
    const splitTextIntoChunks = (inputText: string) => {
        const chunkSize = 28;
        const textString = String(inputText);
        let chunks: string[] = [];
        for (let i = 0, charsLength = textString.length; i < charsLength; i += chunkSize) {
            chunks.push(textString.substring(i, i + chunkSize));
        }
        return chunks;
    };

    const textChunks = splitTextIntoChunks(text);
    const textHeight = 48;

    return (
        <View style={{ position: 'relative', marginTop: 40 }}>
            {textChunks.map((chunk, index) => (
                <TextQuestion
                    key={index}
                    style={{
                        position: 'absolute',
                        top: index * textHeight,
                        left: 20,
                        borderTopLeftRadius: index === 0 ? 8 : 0,
                        borderBottomLeftRadius: index === textChunks.length - 1 ? 8 : 0,
                        borderBottomRightRadius: 8,
                        borderTopRightRadius: index === 0 ? 8 : 0,
                    }}
                >
                    {chunk}
                </TextQuestion>
            ))}
        </View>
    );
}

export default QuestionText;

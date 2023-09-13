import Svg, { SvgProps, Path, G, Defs, Circle, Pattern, Image, Use, Rect, Text, TSpan } from "react-native-svg"
import * as React from "react"
import { Alert } from 'react-native'

interface IconProps extends SvgProps {
    fillColor?: string
    fillOpacity?: number
}
export const ClockIcon = ({ fillColor = '#FFF', fillOpacity = 1, ...props }: IconProps) => {
    return (
        <Svg
            width={19}
            height={21}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                fillOpacity={fillOpacity}
                d="M9.491 20.733a8.727 8.727 0 0 1-3.507-.712 9.158 9.158 0 0 1-2.9-1.96 9.355 9.355 0 0 1-1.96-2.9 8.727 8.727 0 0 1-.712-3.507c0-1.242.237-2.41.712-3.507a9.31 9.31 0 0 1 4.852-4.86 8.727 8.727 0 0 1 3.506-.712c1.248 0 2.42.237 3.516.712a9.28 9.28 0 0 1 2.9 1.969 9.175 9.175 0 0 1 1.97 2.891 8.727 8.727 0 0 1 .711 3.507 8.727 8.727 0 0 1-.712 3.507 9.28 9.28 0 0 1-4.869 4.86 8.727 8.727 0 0 1-3.507.712Zm0-7.558c.422 0 .78-.147 1.072-.44.293-.293.44-.65.44-1.072 0-.287-.073-.545-.22-.773a1.54 1.54 0 0 0-.606-.554V6.09a.631.631 0 0 0-.202-.475.652.652 0 0 0-.493-.202.66.66 0 0 0-.483.202.631.631 0 0 0-.202.475v4.236a1.72 1.72 0 0 0-.589.571c-.146.229-.22.484-.22.765 0 .416.144.774.431 1.072.293.293.65.44 1.072.44Zm-1.02-10.16V1.74c0-.281.1-.521.3-.72.199-.206.439-.308.72-.308a.94.94 0 0 1 .712.308c.2.199.299.439.299.72v1.275h-2.03Zm6.645 2.03.932-.905c.217-.211.477-.317.782-.317.276 0 .507.094.694.281a.933.933 0 0 1 .282.686c0 .281-.115.536-.343.765l-.976.975-1.37-1.485Z"
            />
        </Svg>
    )
};

export const SearchIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={18}
            height={19}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M.021 8.151a7.4 7.4 0 0 0 7.4 7.4c1.363 0 2.62-.377 3.692-1.028l3.534 3.534c.342.342.8.51 1.274.51 1.02 0 1.775-.774 1.775-1.776 0-.475-.167-.914-.51-1.266l-3.498-3.506a7.064 7.064 0 0 0 1.143-3.868A7.404 7.404 0 0 0 7.421.742a7.403 7.403 0 0 0-7.4 7.41Zm2.505 0a4.897 4.897 0 0 1 4.896-4.895 4.899 4.899 0 0 1 4.904 4.895 4.899 4.899 0 0 1-4.904 4.896A4.897 4.897 0 0 1 2.526 8.15Z"
            />
        </Svg>
    )
};

export const UnderlineIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={31}
            height={4}
            fill="none"
            {...props}
        >
            <Path fill={fillColor} d="M.5 0h30v4H.5z" />
        </Svg>
    )
};

export const PlayIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={18}
            height={15}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M6.198 2.682c-2.018 0-3.275 1.25-3.275 3.262v5.174h-.146C1.374 11.086.619 10.305.619 8.896V2.783c0-1.44.793-2.228 2.24-2.228h8.614c1.397 0 2.177.73 2.234 2.076v.05H6.198Zm0 11.597c-1.453 0-2.24-.787-2.24-2.228V5.944c0-1.44.787-2.228 2.24-2.228h8.652c1.447 0 2.24.787 2.24 2.228v6.107c0 1.44-.793 2.228-2.24 2.228H6.198Zm2.457-3.04c0 .304.336.45.61.291l3.776-2.196a.377.377 0 0 0-.006-.66l-3.77-2.21c-.274-.164-.61-.012-.61.306v4.468Z"
            />
        </Svg>
    )
};

export const RightArrowIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={8}
            height={13}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M7.4 6.417c0 .311-.107.571-.374.825l-4.798 4.704a.957.957 0 0 1-.705.285 1.013 1.013 0 0 1-.692-1.758l4.183-4.062L.831 2.354a1.025 1.025 0 0 1-.324-.742c0-.552.457-1.01 1.016-1.01.28 0 .514.096.705.286l4.798 4.704c.26.247.375.508.375.825Z"
            />
        </Svg>
    )
};

export const ShareIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            onPress={() => Alert.alert("Pressed", "Icon Pressed")}
            width={31}
            height={30}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                fillRule="evenodd"
                d="M17.12 2.295c-.63-.63-1.708-.184-1.708.707v5.586c-5.816.905-12.085 3.499-12.909 14.468-.068.904.917 1.257 1.567.625 1.644-1.596 4.68-3.436 11.342-3.436v5.929c0 .89 1.077 1.337 1.707.707l10.879-10.879a2 2 0 0 0 0-2.828L17.119 2.294Z"
                clipRule="evenodd"
            />
        </Svg>
    )
};

export const SavePostIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            onPress={() => Alert.alert("Pressed", "Icon Pressed")}
            width={31}
            height={30}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M4.5 4.985C4.5 3.89 5.395 3 6.5 3h18c1.105 0 2 .889 2 1.985v21.02c0 .784-.871 1.259-1.537.838l-8.926-5.638a1.006 1.006 0 0 0-1.074 0l-8.926 5.638c-.666.42-1.537-.054-1.537-.837V4.986Z"
            />
        </Svg>
    )
};

export const CommentsIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            onPress={() => Alert.alert("Pressed", "Icon Pressed")}
            width={31}
            height={30}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                fillRule="evenodd"
                d="M29.5 13.5c0 .427-.027.848-.08 1.262-.405 4.328-4.21 10.093-12.263 13.01a.491.491 0 0 1-.657-.466v-2.314A15.96 15.96 0 0 1 16 25C8.544 25 2.5 19.851 2.5 13.5S8.544 2 16 2s13.5 5.149 13.5 11.5Zm-19 2.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                clipRule="evenodd"
            />
        </Svg>
    )
};

export const HeartLikeIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            onPress={() => Alert.alert("Pressed", "Icon Pressed")}
            width={31}
            height={30}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M29.5 9.992c0 8.453-8.45 14.977-12.22 17.468a3.195 3.195 0 0 1-3.559-.002C9.952 24.963 1.5 18.428 1.5 9.992c0-1.678.514-3.312 1.468-4.673a7.796 7.796 0 0 1 3.85-2.909 7.58 7.58 0 0 1 4.779-.046A7.785 7.785 0 0 1 15.5 5.197a7.785 7.785 0 0 1 3.903-2.833 7.58 7.58 0 0 1 4.779.046 7.796 7.796 0 0 1 3.85 2.909A8.142 8.142 0 0 1 29.5 9.992Z"
            />
        </Svg>
    )
};

export const ButtonPlusIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={23}
            height={22}
            fill="none"
            {...props}
        >
            <Rect width={22} height={22} x={0.5} fill="#28B18F" rx={11} />
            <Path
                fill={fillColor}
                d="M6.473 10.77c0-.487.398-.885.89-.885h3.252V6.633c0-.487.393-.89.885-.89s.89.403.89.89v3.252h3.253a.888.888 0 0 1 0 1.775H12.39v3.252c0 .486-.399.89-.891.89a.889.889 0 0 1-.885-.89V11.66H7.363a.89.89 0 0 1-.89-.89Z"
            />
        </Svg>
    )
};

export const ChannelIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={49}
            height={50}
            fill="none"
            {...props}
        >
            <G filter="url(#a)" shapeRendering="crispEdges">
                <Circle cx={23.5} cy={23.5} r={22.5} fill="url(#b)" />
                <Circle cx={23.5} cy={23.5} r={22} stroke="#fff" />
            </G>
            <Defs>
                <Pattern
                    id="b"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <Use xlinkHref="#c" transform="scale(.0025)" />
                </Pattern>
                <Image
                    xlinkHref="data:image/png;base64,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9ahTSCH2aQAOo8vcFwBV1EegPsYXwE5OyjWhd8e0ucJw6FdKPQ0r5M7r+ZafD/5h47r9u7n/6YGiqkL6/93/CygBBx1l3KtQAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAAGQoAMABAAAAAEAAAGQAAAAADj5TfYAABveSURBVHgB7d1dj1RHYgbgg5kZvmMWgmVsRaAkgxSw5AXJK8uW8F5492L3Kr9h/0ju98fkLnuRbJTY0caOI4MlwBIkCmxkYM0aY88MMMNXTo0zyIupYrq6+vQ5p54jjYCpruqqp4p++3z06R2//tV7TxobAQIECBCYTODJS5M93qMJECBAgMB3AgLESiBAgACBLAEBksWmEgECBAgIEGuAAAECBLIEBEgWm0oECBAgIECsAQIECBDIEhAgWWwqESBAgIAAsQYIECBAIEtAgGSxqUSAAAECAsQaIECAAIEsAQGSxaYSAQIECAgQa4AAAQIEsgQESBabSgQIECAgQKwBAgQIEMgSECBZbCoRIECAgACxBggQIEAgS0CAZLGpRIAAAQICxBogQIAAgSwBAZLFphIBAgQICBBrgAABAgSyBARIFptKBAgQICBArAECBAgQyBIQIFlsKhEgQICAALEGCBAgQCBLQIBksalEgAABAgLEGiBAgACBLAEBksWmEgECBAgIEGuAAAECBLIEBEgWm0oECBAgIECsAQIECBDIEhAgWWwqESBAgIAAsQYIECBAIEtAgGSxqUSAAAECAsQaIECAAIEsAQGSxaYSAQIECAgQa4AAAQIEsgQESBabSgQIECAgQKwBAgQIEMgSECBZbCoRIECAgACxBggQIEAgS0CAZLGpRIAAAQICxBogQIAAgSwBAZLFphIBAgQICBBrgAABAgSyBARIFptKBAgQICBArAECBAgQyBIQIFlsKhEgQICAALEGCBAgQCBLQIBksalEgAABAgLEGiBAgACBLAEBksWmEgECBAgIEGuAAAECBLIEBEgWm0oECBAgIECsAQIECBDIEhAgWWwqESBAgIAAsQYIECBAIEtAgGSxqUSAAAECAsQaIECAAIEsAQGSxaYSAQIECAgQa4AAAQIEsgQESBabSgQIECAgQKwBAgQIEMgSECBZbCoRIECAgACxBggQIEAgS0CAZLGpRIAAAQICxBogQIAAgSwBAZLFphIBAgQICBBrgAABAgSyBARIFptKBAgQICBArAECBAgQyBIQIFlsKhEgQICAALEGCBAgQCBLQIBksalEgAABAgLEGiBAgACBLAEBksWmEgECBAgIEGuAAAECBLIEBEgWm0oECBAgIECsAQIECBDIEhAgWWwqESBAgIAAsQYIECBAIEtAgGSxqUSAAAECAsQaIECAAIEsAQGSxaYSAQIECAgQa4AAAQIEsgQESBabSgQIECAgQKwBAgQIEMgSECBZbCoRIECAgACxBggQIEAgS0CAZLGpRIAAAQICxBogQIAAgSwBAZLFphIBAgQICBBrgAABAgSyBARIFptKBAgQICBArAECBAgQyBIQIFlsKhEgQICAALEGCBAgQCBLQIBksalEgAABAgLEGiBAgACBLAEBksWmEgECBAgIEGuAAAECBLIEBEgWm0oECBAgIECsAQIECBDIEljIqqVSMYFXjzxojr/+oDl08FGzf+/j5sC+x3/S9sraS83q3ZeaG18uNDduLTQ3by3+Sfm0/zh98n5z5tS9aZtRf84CGw92NFtr5auvdzZf3dnZ3L6zsLl25tw1Tz9iAQEyh8ldWnzSnDpxv3ljeb0Jf09tIVDCz9EjDzcfttoGyqeXdreBsljkxeFc29by8fUfBFeqT8r6JxDW0eH2TUj4Ofbag6cdDOslvPG4+sVi8/vrS09/7y8ESgjs+PWv3ku/gpV4Fm08FTjdvtvfTnA8rRD5y1aQXLm6K/KI7f86hNMvfrqy/QoeOUiBsJdyrQ2SC1d2be6dDHIQOt0ngSc7f37m+N/1qUdj7cv+di/il+2L9F/+xYNm587pR7m09KQ51h76OnF8o31RWGrCi0PuFg6RHX3lob2QXMCB1AvrLuyh/M1fbWzOd+h2OMxlI5ArIEBy5Saot9y+yP/s3dUmhEjpLQRJOIdyuz3mvXo3P5lW13a2h7I2SndPez0VCIdFt96AhL3Zb1by105Ph6hbHQi4CmvGyKdOrDdn31p74bmOaboRgukXP12dKgDCcfLwY6tLIKyd999d21yj4SIOG4FJBATIJFoTPja8o3/7zbsT1sp/eAiqo+1VXbnbuYt7cquqN3CBsFb/9uffbl7cMfCh6H6HAgJkRtjhnd3bP+4uPLaGEd5N5r6TDHsg4RJQW50C4Uqut9+8Z2+kzunPGrUAyWJ7caVfvrcy08NWsR6EF4H32/Mtuds1l3rm0o2mXtgbCRd85L4RGQ2EgbxQQIC8kGjyB5w+dX8mJ8y325NwpU34nEnOduWazwrkuI2tTtiDDoe0pjkkOjYT4/mhgAD5oclUvwn/8c6cnP8nu8+0nzB/0YcUnzfQcEWOw1jPk6nvd2H9THtxRn1qdY1YgBSe7z6ERxhS+M9/ajlvL8TVWIUXxcCbCxdnuMR74JM4o+4LkIKwYe+jT//R3mgvIc7ZC7npct6Cq2IcTQmRccxj6VEIkIKifTteHMLj2OuTfzjwRuEbNhYk1tQcBcJVheH8mo3AloAA2ZIo8Gef9j62hhM+bTzptnVn10nrefy4BcIbkvffae+o4AOH457oCUYnQCbASj00/OfaumNu6nFdl+X26fY3Pg/S9VwN4fnCYdqzP1kbQlf1sQMBAVIIOXyfRx+3EGw57xjXN/JvzthHB30qJxDelMzjQ7LlRqClUgICpJBkn48NH31l8sNY4XJeG4GYwKn2u2z6ds4v1le/n52AV4lCtkuL/b0RXdgLmXTbeGBpTGpW2+PPvtX9rXpqM+77eL1KFJqhcGy4r1tegPR1NPrVF4Gw5k/34EOzffGosR8CpIJZf/Z71isYsiF2JJD7WaOOuudpZiwgQGYMrHkCYxYIe7e5dzwYs0stYxMgtcy0cRKYkYC9kBnBDqBZATKASdJFAn0WsBfS59mZbd8EyGx9tU6gCgF7IVVM8w8GKUB+QOIXBAhMKhD2QpaPr09azeMHLiBABj6Buk+gLwI5913rS9/1I09AgOS5qUWAwDMC4RYnObfNeaYZ/xyQgAAZ0GTpKoG+C+R8fUDfx6R/cQEBErdRQoDAhAIOY00INvCHC5CBT6DuE+iTQDiMlXPrnD6NQV+2LyBAtm/lkQQIbEPg8MGH23iUh4xBQICMYRaNgUCPBF5t90JsdQgIkDrm2SgJdCZw+Ef9/HK1zgAqeiIBUtFkGyqBLgQOvyxAunDuw3MIkD7Mgj4QGJFAn78bZ0TMvRiKAOnFNOgEgXEJ+EDhuOYzNhoBEpPxewIEsgUO7HMYKxtvQBUFyIAmS1cJDEXAYayhzNR0/RQg0/mpTYAAgWoFBEi1U2/gBAgQmE5AgEznpzYBAgSqFRAg1U69gRMgQGA6AQEynd/T2qtrKJ9i+AsBAlUIeNUrNM2rd1EWotQMAQIDEfCqV2iirn2xVKglzRAgQGAYAgKk0DxtPNjR3Li1UKg1zRAgQKD/AgKk4BxdubqrYGuaIkCAQL8FBEjB+blydalZcTK9oKimCBDos4AAKTw7H36yr3CLmiNAgEA/BQRI4XkJ50EuXnYoqzCr5ggQ6KGAAJnBpHz02d4mHM6yESBAYMwCAmRGs/tBeyjr3MU9M2pdswQIEJi/gOtOZzgHn17a3ay0HzA8ffJec2Df4xk+k6YJECDQvYAAmbF5OJQVfpaPbzTLx9abo688nPEzap4AAQLdCAiQbpw3QyQEydLik+bwwUfN/g6/sW1lbWdHo/Q0BAjUJCBAOp7tp59Y96n1juU9HQECpQWcRC8tqj0CBAhUIiBAKplowyRAgEBpAQFSWlR7BAgQqERAgFQy0YZJgACB0gICpLSo9ggQIFCJgACpZKINkwABAqUFBEhpUe0RIECgEgEBUslEGyYBAgRKCwiQ0qLaI0CAQCUCAqSSiTZMAgQIlBYQIKVFtUeAAIFKBARIJRNtmAQIECgtIEBKi2qPAAEClQgIkEom2jAJECBQWkCAlBbVHgECBCoRECCVTLRhEiBAoLSAACktqj0CBAhUIiBAKplowyRAgEBpAQFSWlR7BAgQqERAgFQy0YZJgACB0gICpLSo9ggQIFCJgACpZKINkwABAqUFBEhpUe0RIECgEgEBUslEGyYBAgRKCwiQ0qLaI0CAQCUCAqSSiTZMAgQIlBYQIKVFtUeAAIFKBARIJRNtmAQIECgtIEBKi2qPAAEClQgIkEom2jAJECBQWkCAlBbVHgECBCoRECCVTLRhEiBAoLSAACktqj0CBAhUIiBAKplowyRAgEBpAQFSWlR7BAgQqERAgFQy0YZJgACB0gICpLSo9ggQIFCJgACpZKINkwABAqUFBEhpUe0RIECgEgEBUslEGyYBAgRKCwiQ0qLaI0CAQCUCAqSSiTZMAgQIlBYQIKVFtUeAAIFKBARIJRNtmAQIECgtIEBKi2qPAAEClQgIkEom2jAJECBQWkCAlBbVHgECBCoRECCVTLRhEiBAoLSAACktqj0CBAhUIiBAKplowyRAgEBpAQFSWlR7BAgQqERAgFQy0YZJgACB0gICpLSo9ggQIFCJgACpZKINkwABAqUFBEhpUe0RIECgEgEBUslEGyYBAgRKCwiQ0qLaI0CAQCUCAqSSiTZMAgQIlBYQIKVFtUeAAIFKBARIJRNtmAQIECgtIEBKi2qPAAEClQgIkEom2jAJECBQWkCAlBbVHgECBCoRECCVTLRhEiBAoLSAACktqj0CBAhUIiBAKplowyRAgEBpAQFSWlR7BAgQqERgoZJxGiaB4gJP2hZX117a/Cne+IAbfNLCrK7tHPAIdH27AgJku1IeV73A/Qc7mv/9YrG5cWuhufnlYrNy1w589YuicgABUvkCMPwXC9z4cqG5eGVXGxyLzUYbIjYCBL4TECBWAoGIwPU/LDTnP9+zuccReYhfE6haQIBUPf0G/zyBcKjqs4t7mgvtXoeNAIG4gACJ2yipUOCPX+9sfvu7/c2q8xsVzr4hTyogQCYV8/jRCly+utR8fH6v8xyjnWEDKy0gQEqLam+QAhcu72o+/mzvIPuu0wTmJeA6xHnJe97eCGzueQiP3syHjgxHQIAMZ670dAYC4ZzHh5/sm0HLmiQwfgEBMv45NsKIwLftp8jDCXMbAQJ5AgIkz02tEQicv7TH1VYjmEdDmJ+AAJmfvWeeo0A473Gl/bERIJAvIEDy7dQcqEC4CeK59oOCNgIEphNwGe90fmoPUCDseZT6oOD+vY+bQwcfNktLIZZsfRMId0u+2d7DzDYbAQEyG1et9lSgxN7H0uKTZvn4enPs9QfN0SMPezpS3doSCCHy6aXd7SFLt6bZMin1pwApJamdQQjcbO+sO83ex+GDj5r331lt9u97PIjx6mSzOVdn37q7+adDl2VXhAAp66m1ngtcuZb/LnT5+EZz9q21no9Q92ICZ07e37xNzcXLu2MP8fsJBZxEnxDMw4crEA5fXWu/ECpnO/aa8Mhx61udECLhEKStjIAAKeOolQEIhMNXOV8IFQ5Xvf3jewMYoS6+SCCEx7HXN170MOXbFBAg24TysOELfHUn73u6z5y855zH8Kf/6QgOvfzo6d/9ZToBATKdn9oDEsi5nDPsfYRzH7bxCOxyyXWxyRQgxSg11HeBlYwviTp65EHfh6V/BOYmIEDmRu+JuxYInweYdLP3MamYx9ckMPn/qJp0jHVUAlkn0NtPmtvGJbC+sWNcA5rjaATIHPE9dXcCOeERenfABwa7m6SOnil3LXTUvUE9jQAZ1HTpbK7AhneduXSjqydAyk2pAClnqSUCBAYgcDvzcu4BDK3zLgqQzsk9IQEC8xRYf+Blr5Q/yVKS2iFAoPcC4SYm9kDKTZMAKWc5qpacMxjVdBrM/wsIj7JLQYCU9RxNayt382770VeAlYzPgLhle19nM79f09zKP/9Zx1tTgIx3bqcaWc6H7qZ6whlX3ng4+bX/7to640mZQ/M32htq2soJCJBylqNqKVzqOKbLHb/6evI9KgEyqiW9ORiHsMrOqQAp6zmq1nLvXttHhNt3Jn/nGb590DYegXAC/YbvRy86oQKkKOe4GrvxZd6XL/VN4bsXjskDZP9eAdK3uZymP+H7YGxlBQRIWc9RtXbz1jj+w4XDFjmH4w7/SICMaUFP83XGY3IoORYBUlJzZG3daAMk54W3bwy5J04dwurbTOb3Z3Mv1B5IPmCkpgCJwPj1dwKX/2dp0BThhePild0Tj+FQe/7DSfSJ2XpbIRy+cglv+ekRIOVNR9Xi768PO0ByXzgOH3w4qnmsfTAOX81mBQiQ2biOptVwGCv8DHXLfeE49rpvIhzqnD/bb4evnhUp928BUs5ytC2du7hnkGP7dvWl5srVvD2oo0fsgQxy0p/T6bAGHL56DkyBXwmQAohjb2KoeyHnP88LvmOvbTj/MZJFHfY+hvoGaAhTIECGMEs96OPH5/f2oBfb78LVLxaz9z4cvtq+c98fae9jtjMkQGbrO5rWw6fSL17eNYjx3G9vw5IbeOEGisvHNwYxTp1MC9j7SPuUKBUgJRQraeOjz/Y2Q7i9yWftOZvcY95Hjzh5PpblbO9j9jMpQGZvPKpn+Kff7e/1hwsvtHtJF67k7ymdOXl/VPNV62DsfXQz8wKkG+fRPEu4zfs//MuBXobIH9s77n7c7iXlbsvH1xvfAZKr1696l9o3Erl7of0aSb97I0D6PT+97F04jPVRz06qh/D4zb8emMrL3sdUfL2p/G37JudCxt0HejOAAXVkuJ8QGxDyGLsaji+Hr709+5O1uV/yev0PC81v/326Q2v2PsazSs9fyj8HNh6FbkZiD6Qb51E+y7Xri83f/+OfNTlfF1sKJJzz+M0H0x1SC4et7H2UmpH5thPWQ3hzY+tGQIB04zzaZ9k8J9IeOur6P+3WpbrTnPPYmpRTy/ed+9jCGPCf4c4D59q9D1t3Ag5hdWc92mcKIfLBJ/s2v+3t9Ml7zYH2Hf0st3DI6sP/3FfkJOmB/Y+bN5bXZ9ldbXcgEN5QhHNgY/j6gQ64ij2FAClGqaGwFxJ+wuGgv26vaCodJCE4wu1JSt3cMdyu/RdnV0zcCAT+o72ow1VX3U+kAOnefPTP+Oml3U34CZ/oXj623hx9Jf/GhOGd5X+3oXTti6ViwbE1AadP3XPoagtjwH+eu7i780OoA+Yq2nUBUpRTY98X2NojCSepw91tw6e8D738qEl9VWwIjK/bS3Jvf7NzJqGx1b/Tp+47dLWFMeA/Q3h86rzH3GZQgMyNvp4nDudIrqx9d3hra9Th8NGu9ieESygP23obHl0cw361DbIz7bka27AFwhVXwmO+cyhA5utf7bOHoAg/K3e7vRAwnDT/2btr1bqPZeAhPEpcgTcWj3mNQ4DMS97zdi4QTuqHk+a+67xz+qJP6LBVUc6pGhMgU/GpPBSBwwcfNe+/s+qk+VAm7Dn9DDdIDFdbTXOzzOc061dTCAiQKfBUHYZAOOcRDlvZ8xjGfD2vl/fb2+b8c3sn6FKXcD/vOfxucgEBMrmZGgMSOHVivXn7zbsD6rGuPitQ8oOjz7bt39MJCJDp/NTuqUDY2wif8/Ap855O0Da6FS7pDl8O5pDVNrDm9BABMid4Tzs7gXDI6r237jrfMTvimbdsr2PmxEWeQIAUYdRIHwTsdfRhFqbrQ7gh4r+19zlzrmM6x65qC5CupD3PTAW2Dlc5UT5T5pk1HoIj3Oes67s6z2xAlTQsQCqZ6DEOM4TFqRP3mxPHNhyuGugE3/hyobnYfof9teu+w2OIUyhAhjhrlfc5nOMIN2gMJ8jtcQxvMYST459f3r15mMqhquHN3/d7LEC+r+HvvRXYCo1jrz1owocCbcMR2LpB5s1bi0JjONO2rZ4KkG0xeVAXAmFvYvNn6XFzqA2JP29/wp8hMOxpdDED+c8RPiUeboq50X7gL3wvR/j56k57V+U7C5t/5resZp8FBEifZ6eyvm3dYLFpX3zCC89/VTZ+wyUwNIFub4U6NB39JUCAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgaiAAInSKCBAgACBlIAASekoI0CAAIGogACJ0iggQIAAgZSAAEnpKCNAgACBqIAAidIoIECAAIGUgABJ6SgjQIAAgajAQlvyJFqqgAABAgQIPF/gyf8BixT3FrT50GcAAAAASUVORK5CYII="
                    id="c"
                    width={400}
                    height={400}
                />
            </Defs>
        </Svg>
    )
};

export const HomeIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={22}
            height={19}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M11.556.211a.837.837 0 0 0-1.112 0L.8 8.696c-.602.53-.237 1.541.555 1.541h1.392l1.185 7.299C4.07 18.38 4.782 19 5.617 19h4.53v-6.572c0-.242.19-.438.426-.438h.854c.236 0 .427.196.427.438V19h4.53c.834 0 1.546-.62 1.684-1.464l1.185-7.299h1.392c.792 0 1.157-1.012.555-1.541L11.556.21Z"
            />
        </Svg>
    )
};

export const ProfileIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                d="M9.991 18.733a8.727 8.727 0 0 1-3.507-.712 9.158 9.158 0 0 1-2.9-1.96 9.355 9.355 0 0 1-1.96-2.9 8.727 8.727 0 0 1-.712-3.507c0-1.242.237-2.41.712-3.507a9.31 9.31 0 0 1 4.852-4.86A8.727 8.727 0 0 1 9.982.575c1.248 0 2.42.238 3.516.712a9.28 9.28 0 0 1 2.9 1.969 9.175 9.175 0 0 1 1.97 2.891 8.727 8.727 0 0 1 .711 3.507 8.727 8.727 0 0 1-.712 3.507 9.28 9.28 0 0 1-4.869 4.86 8.727 8.727 0 0 1-3.507.712ZM10 17.24c.65 0 1.304-.088 1.96-.263a7.81 7.81 0 0 0 1.872-.765 6.554 6.554 0 0 0 1.547-1.213 4.37 4.37 0 0 0-1.327-1.292 6.246 6.246 0 0 0-1.855-.808A8.299 8.299 0 0 0 10 12.616c-.797 0-1.541.094-2.232.282a6.294 6.294 0 0 0-1.846.817c-.54.351-.976.78-1.31 1.283.44.475.952.879 1.538 1.213a8.012 8.012 0 0 0 1.872.765 7.612 7.612 0 0 0 1.978.263Zm0-6.143a2.777 2.777 0 0 0 1.547-.431c.463-.299.829-.7 1.098-1.204a3.61 3.61 0 0 0 .405-1.714 3.34 3.34 0 0 0-.413-1.643 3.221 3.221 0 0 0-1.099-1.196A2.738 2.738 0 0 0 10 4.451c-.574 0-1.093.153-1.556.457a3.294 3.294 0 0 0-1.107 1.196 3.327 3.327 0 0 0-.396 1.643c0 .633.135 1.201.405 1.705s.633.902 1.09 1.196c.462.292.984.442 1.564.448Z"
            />
        </Svg>
    )
};

export const DiscoverIcon = ({ fillColor = '#FFF', ...props }: IconProps) => {
    return (
        <Svg
            width={21}
            height={21}
            fill="none"
            {...props}
        >
            <Path
                fill={fillColor}
                fillRule="evenodd"
                d="M.75 10.5c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10Zm12.798 1.083L15.8 5.95a.384.384 0 0 0-.5-.5L9.667 7.702a3.077 3.077 0 0 0-1.715 1.715L5.7 15.05a.385.385 0 0 0 .5.5l5.634-2.253a3.077 3.077 0 0 0 1.715-1.715ZM11.904 10.5a1.154 1.154 0 1 1-2.308 0 1.154 1.154 0 0 1 2.308 0Z"
                clipRule="evenodd"
            />
        </Svg>
    )
};


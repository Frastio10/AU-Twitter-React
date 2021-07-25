import NeedAuth from '@/components/NeedAuth'
import TwitterInput from '@/components/TwitterBox'
import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { useDrop } from 'ahooks'
import { ChangeEvent, useEffect, useState } from 'react'

const SHION =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMSFRUVGBcXFRYWFxUXFRUVFhUYGBcVFRcYHSggGBolGxUWITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OFxAQGC0dHR0tKy0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwEFBAgEBQIFBAMAAAABAAIRAwQFEiExQVFhcQYTIjKBkaGxUsHR8BQVI0JicuEzU4KSsgcWJKJUZHP/xAAbAQACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EADQRAAICAQIEBAQEBgMBAAAAAAABAgMRBCEFEjFRE0FhkSIycYEUwdHhBkJSobHwI0PxFf/aAAwDAQACEQMRAD8AZKJQhe7OMEolCEAEolCEAEolCEAEolSWazvqHCxrnHcBPnuXS3f0TnOs6P4s+blyuJca0XDlnUWJP+lbyf2W/ubVaey1/Avv5HLSiV09tuex0+9WcD8Ic1zvIBVrFctOu79I1QwavdhjwEZrlx/jHhbXM5SS9YMY/wDn3dl7lnouKdam6hVa12DtMnUNOoB2QfdXK3R7DnSdl8Lo9HfVJd/R11Co2oypMTIIjECIifvRalsDnscwtIkRIMwd68NxPj8qtfK3h17ddmG4tPCfn8L79dsHQp0qlWo2x3Xn5mVTLmGDkRy+Sy+mVaaDR/MR4AlR2m5K7c2kuPAkO8JWBf8AZKtcYalSo0j9rh2eZblnxXSp45XfHFmz7rde3Uh6RxacXkrX1RY+7XQ5nWUqzarGyMRkBroGpyOzcuFtNOS7LKQfAjP1WzabG6k4B8TAgjQ8lQOh4mPmV1YRjKKcXldzOS3eTWuZ+eImDhAiYJiYjcUvTESKDmnFAfpnHcmecKqxuTQMp14CJKuU6Y2BVdCznIPpg5+xEtcDmBpMJbYJcSNvutu0v0CZZKrMRDoGUCRkd/yVnV6lOXbBlUnQwt3zyzVOkcMg7V0NssjJECJE5ZKi27C9uJrtpEHgVXlkvUHkyWsW5bIdR3kARGzbmqtS7XjLD4hL1jg2C3ZGmzSVnJ77hDKzkqXeYqDjISR2qg4HL1T6TcJnaEyt3sW/VXUgUsLcrYkJeqG9Kp5kVzE9RQhC96csEmIb0i7qzXrTFlFfCwEDCQAB29oy8/FcLjvGZcLqhYqXYpPHXGH5eT6jOm0/jNrmwcUyi52jXHkCVZZdNc6UqniI91ftHSm0OyBawfxGfmVlWi1vqd97ncyfZeZf8ZaqXSiEfrJy/wAJD64ZHzk/ZfuTflVTb1bf6qjB81Ys1koNzr1g7+FKXE83ZDyWVCElqf4m4hdFxjJQz5xWH7vJtDh9MXl7/U6I9JG024bPRawb3ZnmY18Ssy13vWqd+o6Nw7I8gprquOpXGIQ1kxiO2NYG1dTd3R+jSgxjdvds5BeTtvqrk5S+Kb65y3n1bHksbI5+5ujjqkPqS1msfud9Auys9BrGhrRAGgUN4W9lFuJ55DaeS5K19KKzicGFg2QJd5lJtXap56L+37k9Dt1TtF6UWd6owHdMn0Xn9ottSp33udzJjyUC2jw5fzSDJ3VXpPZxoXO5N+qyrz6SU6ggUsXF+H+65lCYhoqovO/uRkjvGztrAgtDd0ftPBcxbbpfTjLE0DvDjqSNi6tOXX0mus0+y3j2f+7GVlSmctSo6Expl5BWZWnabA12YyPp4hZNqDqZId6beS9HptdVqNo7Ps/93E51uHUo1TM+atWEkMG85nx+wqTsyB8RgrQThmR212Y5Jl1k4cztmOe/emW+prwCS7nZHZEIJL1pqQ1xG4xzOSShTAAGwADyCr2szhb8Th6dr5K5Kq9yCOrZ2HVgz8FQr2KkZHaHkVoYtvl81n1X56fuGf8AqCzdMPoRgf8Ak7d/uhXsSRR4Ee7DB0CEJ1OkTtA4uIA9V7qUlFZexyks9BqewuILRMd4jZMa+S0+qsNNs1rWyfhZieeQDAZWzdQJH/h2Go8OHZrWpzaFFwI1A7VQiP4BcLier0uo086H8XMvZ+T+w5RVZCan0wcehWLdZXUqj6bwA5pg4ZLd/ZJzI3Sq6+XSi4tp+R3k8grt12B1eoGDTVx+Fu0qCzUHVHBjRLnGAF21nZRsNLtuGI5kjvPO5o3Ja+5wWI7yfREmpQotY0NaIa0QOSoWy+qTAYc1xG4rlr3v+pWlo7DPhGp/qPyWSla9A38Vj+xOSzb7Y6q8ucSd3BVEIXRSSWEQCEIUkAhCEACEIQAKveFkFVsaHVp3H6KwhXrslXJSi8NENJrDOILiKjR8J7XAmQAtSdu4ZqO/LIGVCdlRzT4yAfvimVjDY3+y9pTara4zXmc6Sw2ilandlx3z6qxYzDuY9R9lVbSeyVPZ2gmDuWpUkq1JqU4kgOMnZOE5Derz3bPuFRr1IAMd0tgDy+asU51Op14cFBJISsy1uJ03iPAz8ldqPWeD2m+J9P7qSB35kdw80KP8AdyVGQO3uTow+0VKQfVq4Kj6jDhOHJjHuGs/AvQKHQew0QP0Q92Xae5ziSM51hYVxX0ymyg1tG01HU31nEsovI7bajR2og5O3rUr3zbH6WJ4G+rUaweTQ4q99viTeOi+5WKaiaFCz06VV3VU2M/Qd3Wgfu4LRuI/+NQ//Kn/AMGrmqdG01HlzqtKkC0sIYx1QwTPeeQJ8FpWW7aUBtV1asAAAKjz1cARHVthvmCsGn5IFJY3ZndILpbaK+KlUZiI7Y1jCO8SNNghcu6xP6zqmgOdubtjdK7y/rcyjRhga0QQ0NAaPABefUrQ5rsbSQ7PPbnqvHa5t6u1RSSX+cbnSp+RG1ZrS2xsOQdaHDMaim3cY1O2FjWiu6o4veS5x1J+8go01KxrUW35vzNQQhCuQCELPvO+6FD/ABKgxfCM3eQ0VoQlN4issG0upoIXH1unrAexRcRvc4D0AKuXf0zo1O+x9PjGJvmBkmnoNQlnkM1bBvGTpEJlnrtqNDmOa5p0LSCPRPSjTWzNAQhCgAQhOQBkdJh+iCBMPbpsGp9ljWl2YHiugv4fouPwkHyP91y5YQBJJIH2ByXp+ESzp8dmxLUL4yK0nsnw91Ys57QVW0ns+XupabswuqYlmqMvFv8AyCnc7VV3gmQOfil6yQI2qAEqvyKptfDxyPM6aKS0P2KINzxbsh46+nupAu/iX/5TvNv1QqWJCgD6GaIEJ2MxEqjL2ZEFBth3K2BcWq1+zRIyq8aglVLZeppjEQSJjLZzUTOkzOI8D8lV2Ri8N4LKuTWUjP6U2zG9rNjW5jiSsizug+BVq+rUKtUvaZBA3jTmq1jZiqMbvc0eq8bro4useNm2danaCRev+7RQeAO64SBtG8eaylr9Ka+O0v3Nho8Mz6krKSenUpQj5to0Y1KlQuktBLzlgrzDHaGNy8sstz2i1VXloPeOJ7smgztK9WSJ/Sw/D82N8mU48+MnP3R0RoUYLx1r97u6Dwb9VvNptAgAAcAE5KtJtzTySkl0IadnY0lzWgE6xlPOFIlSLz8m87moIQhVAgttF7xhZU6ve4AF0fxnIc1yV73RbKE1qNoq1AM3Ak4hxw6OC7ROCc0t84yUYpNPyaKTgpHNXZfH4mxvfUAxMyfGhiCHRyVO0Hato3Y2kbQ9gAZVYCWjY8TiPIgj1WEMmkbsvDZ6L0ejhGPNyLCz+QpbnbJTtWh5j3yT5Va1NJc2PHwP91OnDIv49OKzrPXElu4mOOexWKtSATuCrVAA1siSCD4nMqQHPMnmpK2QASU2xzKZaHZhADEqbiQjAH1S6mDqAVVr3ax2xTgpQ5Zboh4Mq0XDTc0tMwRC8xqNLSQdQSDzBhexly8v6TWbq7TUEQCcQ5Ozy8Z8ktqd0mb6fCbSMZ9ojVpVu7H46lMN1L289QoHNkQVZ6PWYNLrQdKIJA31CYYPn4LmaixQqk32/v0Q6kmgvJ+KtUO97v8AkVAkSpHQLEn6IiQiEIXVKAhQGjbKr+qslnbVdhxEueGgDTQ6qraOjPSAnKgxo3A0z6krSNUpLKKSsijSSLzl/Sm2scQXMJBIPZbEgwdFYs3TiuD+pTY4cJaVZ6eaKq+DO/SLn7u6YUKhwvxUnfz08/quhBXMs4e+ZtvGfQ2jNNbCJUJFWOhjndk8wQlUNqtTKTcVRzWjeTCxqnTCyNMY3HiGkhOVaaMfkiVc0urNm2NJY4DUtIHOFyNYQHA6jI+a6Gy3zSr03uovktaSREOGWRgrnHHsnkuhpE/iTF7nnBRrat5keilpqNzZcwcfkrmGE6YENpZ2FBZ3lwDjsyHE7XKW1nskDUwB4pGMgAbBkoJHSoKxM7FK9VqpzUgGfBCSUIIPq4sTS1Qded6eKu9ZYK8yHrneml1mrSFRgl9PYNSwnMDlr5roBUCCCdFWceZYZZSw8o8gWrejeqo06A7x/Vq/1EQ0Hk1dhe9yUXfq1Ghpb2nOblIGZxb9FwFutJq1HVD+4zyGgHlC83xTKsjXnZb/AJL837D9U+dZK6ckSqNBF5ky8hEIQukUJbNaH03tqUzhe0y0/I7xwXpPR7pdRtEMqEU621p7ruLHaHlqvMUjmg6rSu1w+hScFI87/wConR6pYLdVpOBDHONSk7Y6m4kiOWngs/otcda3WmnZ6LSS4jERoxk9p7jsAC9dq2tz2ClXbTtFMd1tdgqYP6HHtN81Nd15OszXNstOz2cO7xo0g1x3S4ySmfHjgw8GR6Df13WGnZmttdKk9jGhjQ5oLnQ2AG7ZyXklmsgpPcKQLaLiXNpk4uq3NaTnEeq0K9d9R2Ko973fE4lx9dFGsLLebY2hXy7go7Q8hpwiXaAbJO/gpELE0Nvox/08sNqomvXdVtNeHNcHuhjHxkGsaBDdCNdV4BaQWPcwtALXFpEbQYK9wuy8qtnf1lJ0HQg5tcNzhtWZeFzWCtaTbH2eqHl2N9Fr2fh6lSZLnEtxNaTmWjVOQujjfYWnU87bk1a4KFmu+yHqWttbqBfVeBDi14JDXDbqP9q4p/dK7e+rc6p1lWoRLgdNAIhrWjYBkIXEP7pU6afPOx+W3+CLI8qSK1Lvt4SfRWnKpS745FXdidMiq9suA3Z+JyHzT3Io5gu+Iz4aBI7f981BJE5VqpzVptajPbqP44Ggx4khaDaNifEV3t2HEAPPcspXxXf2LqtswpSrpPyKxf8AyB/vpoVPxVfr7MnwpHsrrwMzCnp297sg0c1lp1OoRoU24oQyzoqVZsZzKmbbG7PVc6y2OGuajvK9OrZLRLjpOg4nelr7K6Y89jwv96G0MyeIk/TW8D1GAOEuIkbcOfzELglNaLQ57i55JJ+4G4KFeR1NqtulNef6JHUrjyxSHITUqKL3VL07F2sghKkXYhOM1mJQEIQrkAhCVBIiFFWtDWFocQMUxO2M0rrRlIa9w3hp+z4IAkQq/wCMb/LlgfPsnm0tHelv9QI90YIJUJGmRO9V7xtgo03POwZDedgUpZeEDeCl0hrw0MG0yeQ/v7LArd1S17U6q4udE5ZDQCJgear2o6BdLT1uuGH1e7E5y5nkrUhL53RHjKntboYTt+uSrUn9rQ6jRTWsSJOQBGXjt+i2KEzhAAH2AijQc84WiT6DmprHZS8yZAOp+QXS2GztaOy10ZcJ4kpa7UKGy3ZrCpy3Zzde6aDKYfWJ/cJaYOJpygeG1c2x7Jjl7wNOa9Ctl0sdmQ45nIhp1z3KvQuljD3YB1hrZISsb11e+Td19jlPw5+EeaF33Y/l5IVfxHoTyHfYjtaE7L4B5rP/ADuml/O6a9UtFLszgeKzQGH4PVMt1BtXvA+GSo/ndNL+d01jZwqu1p2V8zXTJaN84/K8DHXFS2Y/P+yYbhp73+Y+il/O6ajrX8wDISdg+qwv4bo6K3ZbVFRXm0aQvvm+WMm2MfcNICS9zQNSSI9liW0Uw6KReQNroz5AaBOtltfVMvPIbByCqrw+surtszVBQiuiXn6s7VMJxj8cssVOYyQTllGW05xlvSLVuurSpHE44neg5ceKa4Xw/Uaqeak+VdX5fu/QpqNRGpb9exlJF1VG6WWhj3MbgLiC0nQuE6cDPmuYq0y1xa4QQYI4p+yqVMnXNpyXXBNdniR5sYGIQhVLgQhBKy6l+0sWFuJxidgHqrRhKXREOSXU1ZTXtBEEAjaDmPGVh1L7cSQ1oGmeusrLvC3VHloc8xqQMhu0HNbx0s/PYzd0TevC+mMyZ23cD2fPauXvC3Pq4y86DIaAb4Tqxzjcq8dmpyPsnK6Yw6dTCVjkXaQ9goK5lys09/D5Kk47VqUGWfX/AFfNa9lu8VO8cpmN8b+CybIQMJIJGsDbthaNTpC9mTaTW7pzyS985pYiaVpPdnTWaz8fRW+o2F3HXJcK/pLaTEPjkB9FY/7qtI/cxwy1Y3fyXOdExpWI7Btm/nE65+EJzKcCA5p567wuTPS6t/l0+MA5+v3CQ9Lq8dxmszh0Ufh7CfEidfg4t+/FC4//ALsr7mf7GoR+HmHio61CEL6eeYBCIQoAEIQl9Ro6NQkroKWOmS8LZQ+V4BCbKjfV3JGzhfDa1mVMfY1/E3f1skc8DVQPreCy7feYbk3N207B9SsV7yTJJJS89UoRVVUeWK8lsChKT5pPc9eubppSgMtLmsfkGuzwv3CB3T6LN6RWunVq46ZJBABkRmF5ktS7b3LIa+XN37W/UcF57UaJZc61j0OnTqMLln7nSITaVQOAc0gg6EJyQHAInJZHSKyUg7r2UurJAD8EYcWmLDsnLTbzWuqF+n9B3Nv/ACC208nGxY8zO6KcH6HNsMk+HzUdoGf+g+hCQFMrv2xsI89F1nHsIxnkHnMqNo7FTkfon657Cq3XDq3AZkk5bs5lVLmg4w1U6pyPJWqpyHGPZVK/dP3tQA6kNPBSW1swOKSkM+Se8SW85VLPlZaHUz6lqazIjSJ8cgpKjcgd61RdtLtFxxE6ZwAfBUra2C0S07ezMDPelVLJtgbTYC5rYGe1SWuiGCcjOXpqhp/UZCmvR+IN3TpxUPqSil1J+4Sq52UKxXc0Bb3fGfMpfxjviPmsPrwjrhvV4ai+Hy2SX3YSpql80U/sbv4s7SfMoFr5+ZWGK3FH4g70zHimsj/2Z+qRhLQ6aX8vs2b/AOM4+gTeuHD1WF+JK1rlsxqdtw7I0/kfoE5RxfVyko4i/t+4rdw7TxjzNtfc1LLR/cfBUbyvDVjDzO/gE69Lfqxh/qPyCyVrqNRKyTMaaVFCIQhKG4ISq5c1PFWaCJ1/4lQ3hZJW7wSXZbXUsyCaZMHnGo46LpaFZr2hzTIK5uwUy+z1Wt7wc15H8QM44ptz1agcRSzyktOhA9ikr6VZmS2aGarXDCe6OpWJflXrHtot1Ek7pg5eXurBvgOaAwHrHHCGn9p3k7lmXbRd+Ka0nNriXHfhBJ8/mstPS4tyltg0usTSjHzM4hNV6qwGiXaYapa3+lwmPCPVUZXRi8ibQos4OhLd8aeSdTwtcAGjLIZZ+O+UlN8FMa7tjmPdZyWNjaMso0qjHOABYztd0kNiI0kZhJ+UOzLm0SG5kNqO6zhDBqrJHaZw+hT6D4qu5LHwsdGW5skdmuRz2l7W0w3Mx1sOAGvZcJnLRFkuF9cF1JocBlBe0Oyj9rtiuWZ3Z8Sf/YqvVfiqCTMExPJUdM2sc39iVLBB+UPxmiykTV1NOR3RnMgxEGcinVLgtDTBsYjeMU+jlPQqRWcf4/RW6LjhBOc5meOfzVXTPuvZk+J2KjLhMS6jgPKoY/8AZJbboDG4ure8jQNFTfzyTqNUlznHYMo027PBOum1PxOOJwjcSPvVUdFndf3BWvsYuD/61XzqfRC638yqf5tT/cUKPCt/pXuT4voecljhqCOYKZiXay0MG3aZ01y15qpXpsdqxu6YGe88NE/DSxsmoQk93tlfoYy1EoRcpLp2f6nLSjEugdd1I/s8iR81E66GbC4eMpufA9QumH9/1MI8VofXKMuxUTVe1g2nPgNpXS3jaBTaKbMstmwfUqOwWNtna6oTJOTZ9vH5LOqPLiSdSs4VOhOL+Zk2WK5pr5UNSIQoIBCEIAFauyrgqscdA4TyOXzVVBUNZWCVtubzmdRaHzlTqNdG7NpIHn7rNum29TUxxIgghbFmvek6kBU7zRGYmctfFYFazOa1jiMniR5wl698xn9PqbT2w4mtQs5FH8SB2hUL4/hJBCpWe1zXNSD28YgZntNIyXW0LMBSFPZhjzC5Ow0XUwa8f4Tw2N+oPuPNUqmpc2foTOLWCa30urs1Km7vOcXkbstvmspXL0vA1nBxEACAN29U0xWmo79TKbTewKCpVwlTqK0tkTuVbo5j9C9UsSEFuO93mnNt5BnEZ5qjiCJCSHDSbejvjKVt4GZxLMkIkIDCNZt4mZkSdcgphezojEI5LFyRkjL7hhdjbbeJggEZos94FumHPesRE8Uc0u4csexvfmJ4eaFhzxQpzLuTyR7G8SXFh2AabJyhR0jmJ+IjzCdQJIbO4lRNgOdrk4eUroUS5bYPs0I2x5q5L0ZeT6NPEY8+SYrLjgpF20r1mqu8KDfn5HnaK/EkkZd52nG6B3W5D6qmlKF5ZvLyzupYWBFPZ6OKeAJUIE5Lau6iBI4Zreih2KUn0iv/AAytt5MLzZipE+r3jzTEuaggoQgkFr0rZjp0KMScYnk1wj0J8lkK7dH+PS/rCznFNfQtF7/U7ZcnfNctNWjsc8PHiM/YLsYXFdJCPxDo3N9klpVmQze/hMxCELoCgJEqFIGbVEEhR4lv2Z4ggxwlFCm0uza3yG5KSqwxqNuUYEpZXSU7LTIBLGeQUVGx0y4gtacp04qvhPuW8RGBKJW46x0y6MMDPQlFe7aYAIB2bTtUeEyfERiYgklbVpuumIjF5ppuhkDN0kxsy9EeGyfERjyhbf5E343eQQjw5EeJEls5MA6ZRHz9Ex+ruXtorTLOBpOkaj6JjrNmTnmI0UrUQ7kOmXYuWZmIjzKZfdXIN8VaszOrpgu3ZrEtdYvcXeS72t1KsxjscfTU8jeSBKiEQucOE1nyM+PhMFbFk/ceCzajO7GmnhCv2Y/pvPCPHOU9o7v+G2H0f5C2pq/5K5L6GK85lNSwiEiMiISwiEAIn0nQ5p3EHyKbCWEAejNM5rhL3M16n9RW9ZLLaXMaQ8YSBHKFzVqacbs5zOe/PVJ6aCjJ7m90spbESROhMflnuI+nzTZhgVCdCSFIAp7M7Pz9lBCXFAJ4H2VZLYtF4ZfxQwcvkorK/tkfxHum4uyOQ9lHZ86nIffusjUmxdrzT7Q7Jvh8lAT2vNLaTIHGPkgkmtbs1Iw93xPp/dVq+v3uU1I58m+5/sggsoUXWcChSBiJQkQkBt9Ce8O6sxCF1LOpz4dAUlLUJELKXRl11J6+g5j3UtLuO8UIVtN0l9Av6ooIQhQQCEIQAIQhAHR3X/ht8VzpSoWNXzSNJ9ENTK3dKELYouo8IQhBAJH6FKhADxoOQSUO8fH5IQszQNqV+g8EIQA6rr98Eo1PIIQgByEIVST/2Q=='

export default function Home() {
  const { isOpen, onClose, onOpen: showModal } = useDisclosure()

  const [file, setFile] = useState<File | null>(null)
  const [imgSrc, setImgSrc] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const [dropHandlers] = useDrop({
    onFiles: (files) => setFile(files[0])
  })

  const fileInputHandler = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    if (files !== null && files.length > 0) setFile(files[0])
  }

  useEffect(() => {
    file ? setImgSrc(URL.createObjectURL(file)) : setImgSrc('')
  }, [file])

  return (
    <>
      <NeedAuth>
        <Container maxWidth="80%">
          <Heading size="lg">Buat cerita baru</Heading>

          <Input placeholder="Title" />

          <Textarea></Textarea>

          <TwitterInput
            avatarSrc={SHION}
            onAvatarClick={showModal}
            time={new Date()}
          />

          <Button>Tambah Segmen</Button>
        </Container>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload Foto Avatar</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <VStack>
                <Center
                  width="100%"
                  height="200px"
                  flexDir="column"
                  borderColor="gray.500"
                  borderWidth={4}
                  borderStyle="dashed"
                  borderRadius={8}
                  {...dropHandlers}>
                  <Text>Drag fotonya atau</Text>
                  <label>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={fileInputHandler}
                    />
                    <Button as="span">Pilih foto</Button>
                  </label>
                </Center>

                {imgSrc && (
                  <Image alt="Uploaded Picture" src={imgSrc} maxWidth="50%" />
                )}
                <Text>Atau</Text>

                <HStack>
                  <Input
                    type="text"
                    placeholder="Masukkan URL Foto"
                    onChange={({ target: { value } }) => setImgUrl(value)}
                    value={imgUrl}
                  />
                  <Button
                    onClick={() => {
                      setImgSrc(imgUrl)
                    }}>
                    Set
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </NeedAuth>
    </>
  )
}
